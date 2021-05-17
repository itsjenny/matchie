
const sql = require("mssql");
var express = require('express')
var app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// POST method route
app.post('/', function (req, res) {
    console.log(res.body)
    const config = {
        server: "DESKTOP-1IEIIQJ\\MOVIESERVER",
        database: "MovieData",
        user: "sa",
        password: "sqlpass",
        port: 1433
    };

    sql.connect(config, (err) => {
        var request = new sql.Request();

        //Build the query
        console.log(req.body)
        let numQuery = `SELECT TOP ${req.body.numOptions} * FROM [MovieData].[dbo].[AnimeDB]`
        let genreQuery = ""
        for (var i = 0; i < req.body.genres.length; i++) {
            if (i > 0) {
                genreQuery = `${genreQuery} AND`;
            }
            genreQuery = `${genreQuery} Genres LIKE '%${req.body.genres[i]}%'`;
        }

        let releaseQuery = `Short_Date > ${req.body.releaseMin} AND Short_Date < ${req.body.releaseMax}`
        let episodeQuery = `Episodes > ${req.body.episodeMin} AND Episodes < ${req.body.episodeMax}`
        let scoreQuery = `Score > ${req.body.scoreMin} AND Score < ${req.body.scoreMax}`
        let statusQuery = `Status LIKE '%${req.body.status}%'`
        let typeQuery = `Type LIKE '%${req.body.type}%'`


        queryCode = `${numQuery} WHERE ${genreQuery} AND ${releaseQuery} AND ${episodeQuery} AND ${scoreQuery} AND ${statusQuery} AND ${typeQuery} ORDER BY NEWID()`
        console.log(queryCode);
        request.query(queryCode,
            function (err, records) {
                if (err) {
                    console.log(err);
                }

                //Put the objects into the array
                let queriedMovies = []
                for (var m = 0; m < records.recordsets[0].length; m++) {
                    queriedMovies.push({
                        Title: records.recordsets[0][m].Title,
                        Movie_Poster: records.recordsets[0][m].Movie_Poster,
                        Release_Date: records.recordsets[0][m].Short_Date,
                        Audience: records.recordsets[0][m].Audience,
                        Score: records.recordsets[0][m].Score,
                        Genres: records.recordsets[0][m].Genres,
                        Episodes: records.recordsets[0][m].Episodes,
                        Type: records.recordsets[0][m].Type,
                        Status: records.recordsets[0][m].Status,
                        Studio: records.recordsets[0][m].Studio,
                        Synopsis: records.recordsets[0][m].Synopsis
                    });

                }
                console.log(queriedMovies);
                res.send(queriedMovies);
            }
        );
    });
})

module.exports = app;




