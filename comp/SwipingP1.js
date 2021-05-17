import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
import './CSS/Card.css'
import TinderCard from 'react-tinder-card'

function SwipingP1(props) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    let [yes, setYes] = React.useState([])

    const swiped = (dir, anime) => {
        if (dir == "right") {
            yes.push(anime)
        }
        console.log(dir)
        console.log(yes)
    }

    return (
        <div>
            <div class='bar'>
                <h2 class='title'>Title</h2>
                <div class='divider' />
                <div class='navButton'>Home</div>
                <div class='navButton'>About</div>
                <div class='navButton'>More</div>
            </div>
            <div class='main' style={{ position: 'relative', zIndex: 1 }}>
                <h1 style={{ fontSize: '4vw', padding: '1vw', }}>Start Swiping!</h1>
                <p style={{ color: '#FFF', fontSize: '1vw', padding: '1vw', paddingBottom: '2vw' }}>
                    Swipe right if you want to watch the anime, or swipe left if you don't.
               </p>
                <br />
                <div>
                    {props.master.map(anime =>
                        <TinderCard onSwipe={(dir) => swiped(dir, anime)} preventSwipe={['up', 'down']}>
                            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
                                <div class='bigCard'>

                                    <img src={anime.Movie_Poster} class='poster' />

                                    <div class='info'>
                                        <div style={{ height: '12vw' }}>
                                            <p class='animeTitle'>{anime.Title.toUpperCase()} </p>
                                            <p class='animeDate'>{anime.Release_Date}</p>
                                            <p class='animeCategory'>genre</p><p class='animeData'>{anime.Genres.toUpperCase()}</p><br />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '0vw', width: '50%', padding: '0' }}>
                                            <p class='animeCategory'>studio</p><p class='animeData'>{anime.Studio.toUpperCase()}</p><br />
                                            <p class='animeCategory'>type</p><p class='animeData'>{anime.Type.toUpperCase()}</p><br />
                                            <p class='animeCategory'>score</p><p class='animeData'>{anime.Score}</p><br />
                                            <p class='animeCategory'>episodes</p><p class='animeData'>{anime.Episodes}</p><br />
                                            <p class='animeCategory'>status</p><p class='animeData'>{anime.Status.toUpperCase()}</p><br />
                                            <div style={{ color: '#2b1b2d', width: '100%', height: '25%', fontSize: '0.8vw', padding: '0', margin: '3%' }}
                                                class='nextButton'
                                                onClick={handleClick}>
                                                Click here for the synopsis
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                </div>
                                <div class='bigCard'>
                                    <p style={{ color: '#2b1b2d', height: '10%', fontSize: '2vw', padding: '2%', fontWeight: 'bolder' }}>
                                        {anime.Title.toUpperCase()}
													 <p class='animeSynopsis'>{anime.Synopsis.slice(0, -24)}</p>
                                    </p>
                                    
                                    <div style={{ color: '#2b1b2d', position: 'absolute', top: '22vw', width: '90%', height: '5%', fontSize: '0.8vw', padding: '0' }}
                                        class='nextButton'
                                        onClick={handleClick}>
                                        Click to flip back!
                                </div>
                                </div>
                            </ReactCardFlip>
                        </TinderCard>


                    )}
                </div>
                <br />


                <div style={{ color: '#FFF', position: 'absolute', left: '40%', top: '12vw', width: '20%', height: '3%', fontSize: '1vw', padding: '0', zIndex: '-1' }}
                    class='nextButton'
                    onClick={() => props.prevStep()}>
                    Back to movie selection
               </div>
                <div style={{ color: '#FFF', position: 'absolute', left: '40%', top: '15vw', width: '20%', height: '3%', fontSize: '1vw', padding: '0', zIndex: '-1', }}
                    class='nextButton'
                    onClick={() => { props.returnSwipe(1, yes, 'no'); props.nextStep(); }}>
                    Next person's selection
               </div>
            </div>




        </div>
    )
}
export default SwipingP1