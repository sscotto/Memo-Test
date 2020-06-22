import React, { useEffect } from 'react';
import useGameState from '../CustomHooks/UseGameState'
import { PropTypes } from 'prop-types';
import './GameField.css'
import CardList from './CardList';
import useCardNumberGenerator from '../CustomHooks/UseCardNumberGenerator';
import TimerComponent from './TimerComponent';




function GameField(props) {
    const { 
        availables, 
        addToSelecteds, 
        removeFromSelecteds,
        secondsLeft } = useGameState();

    const { cardNumbers } = useCardNumberGenerator(); 

    useEffect(() => {
        if (availables.length === 0)        
            props.onGameFinished('win');
        if (secondsLeft === 0)
            props.onGameFinished('lost');
    });

    const canHide = (number) => {
        if (availables.includes(number)) 
            return true;
        return false;
    }

    return (
        <div>
            <CardList 
            cardNumbers = {cardNumbers}
            availables = {availables}
            addToSelecteds={addToSelecteds} 
            removeFromSelecteds={removeFromSelecteds} 
            canHide={canHide}>

            </CardList>
            <TimerComponent secondsLeft={secondsLeft}></TimerComponent>
        </div>
        );
}

GameField.propTypes  = {
    onGameFinished: PropTypes.func
}

export default GameField;