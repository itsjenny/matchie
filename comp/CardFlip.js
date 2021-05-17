import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import ReactCardFlip from 'react-card-flip'
import { Card } from '@material-ui/core';
import './CSS/Card.css'

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div class='bigCard'>
                this is the front of the card.
                <button onClick={handleClick}>clci to flip</button>
            </div>
            <div>
                this is the Back
                <button onClick={handleClick}>clci to flip</button>
            </div>
        </ReactCardFlip>
    )
}
ReactDOM.render(<CardFlip/>, document.querySelector("#root"))
export default CardFlip