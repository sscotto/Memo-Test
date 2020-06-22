import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './StartButton';

const Credits = (props) => {
    return (
        <div>
            <h1>{props.message}</h1>
            {props.status == 'win' ? <h1>You have won!</h1> : <h1>You Have Lost</h1>}
            <h2>Thank you for playing.</h2>
            <Button onStartGame={props.startGame}/>
        </div>);
}

Credits.propTypes  = {
    message: PropTypes.string,
    startGame: PropTypes.func,
    status: PropTypes.string
}

export default Credits;
