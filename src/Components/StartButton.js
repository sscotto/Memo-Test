import React from 'react';
import './StartButton.css'
import { PropTypes } from 'prop-types';

function Button(props) {
    return (
    <button className="myButton" onClick={() => {props.onStartGame('playing')}}>        
        Start Game
    </button>);
}

Button.propTypes  = {
    onStartGame: PropTypes.func
}

export default Button;