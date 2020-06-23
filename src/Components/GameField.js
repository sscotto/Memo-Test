import React, { useState, useEffect } from 'react';
import useGameState from '../CustomHooks/UseGameState'
import { PropTypes } from 'prop-types';
import './GameField.css'
import CardList from './CardList';
import useCardNumberGenerator from '../CustomHooks/UseCardNumberGenerator';
import TimerComponent from './TimerComponent';
import TriesDisplay from './TriesDisplay';


const MaxTries = 10;

function GameField(props) {
    const { 
        availables, 
        addToSelecteds, 
        removeFromSelecteds,
        secondsLeft } = useGameState();

    const [tries, setTries] = useState(0); 
    const { cardNumbers } = useCardNumberGenerator(); 

    useEffect(() => {
        if (availables.length === 0)        
            props.onGameFinished('win');
        if (secondsLeft === 0)
            props.onGameFinished('lost');
    },[availables, secondsLeft, props]);

    const canHide = (number) => {
        if (availables.includes(number)) 
            return true;
        return false;
    }    

    useEffect(() => {       
        if (tries === MaxTries)
            props.onGameFinished('lost');
      },[tries, props])
  
    const incrementTries = () => {
        setTries(tries + 1);
    }

    return (
        <div>
            <CardList 
            cardNumbers = {cardNumbers}
            availables = {availables}
            addToSelecteds={addToSelecteds} 
            removeFromSelecteds={removeFromSelecteds} 
            canHide={canHide}
            incrementTries={incrementTries}
            >

            </CardList>
            <TimerComponent secondsLeft={secondsLeft}></TimerComponent>
            <TriesDisplay triesLeft={MaxTries - tries} ></TriesDisplay>
        </div>
        );
}

GameField.propTypes  = {
    onGameFinished: PropTypes.func,
}

export default GameField;