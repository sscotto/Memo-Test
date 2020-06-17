import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './StartButton';

const Credits = (props) => {
    return (
        <div>
            <h1>{props.message}</h1>
            <h1>Thank you for playing.</h1>
            <Button onStartGame={props.startGame}/>
        </div>);
}

Credits.propTypes  = {
    message: PropTypes.string,
    startGame: PropTypes.func
}

export default Credits;
