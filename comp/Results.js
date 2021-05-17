import React from 'react';

function Results(props) {
    return (

        <div>
            <div class='bar'>
                <h2 class='title'>Title</h2>
                <div class='divider' />
                <div class='navButton'>Home</div>
                <div class='navButton'>About</div>
                <div class='navButton'>More</div>
            </div>
            <div class='main' style={{ position: 'relative', zIndex: 1, backgroundAttachment: 'fixed' }}>
                <h1 style={{ fontSize: '4vw', padding: '1vw', }}>Start Swiping!</h1>
                <p style={{ color: '#FFF', fontSize: '1vw', padding: '1vw', paddingBottom: '2vw' }}>
                    Swipe right if you want to watch the anime, or swipe left if you don't.
               </p>
                <br />
                <div>
                    <button onClick={() =>props.compare()}> Generate Results</button>
                    <button onClick={() =>props.prevStep()}> Go back to swiping</button>
                    {props.results.map(anime =>
                        <div class='smallCard'>
                            <img src={anime.Movie_Poster} class='picture' />
                            <p class='aTitle'>{anime.Title.toUpperCase()} </p>
                            <p class='aDate'>{anime.Release_Date}</p><br />
                            <p class='aCategory'>studio</p><p class='aData'>{anime.Studio.toUpperCase()}</p><br />
                            <p class='aCategory'>score</p><p class='aData'>{anime.Score}</p><br />
                            <p class='aCategory'>episodes</p><p class='aData'>{anime.Episodes}</p><br />
                            <p class='aCategory'>status</p><p class='aData'>{anime.Status.toUpperCase()}</p><br />
                        </div>
                    )}
                </div>
            </div>


          
            
        </div>
    )
}
export default Results