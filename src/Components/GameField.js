import React, { useEffect } from 'react';
import useGameState from '../CustomHooks/UseGameState'
import { PropTypes } from 'prop-types';
import './GameField.css'
import CardList from './CardList';
import useCardNumberGenerator from '../CustomHooks/UseCardNumberGenerator';




function GameField(props) {
    const { 
        availables, 
        addToSelecteds, 
        removeFromSelecteds, } = useGameState();

    const { cardNumbers } = useCardNumberGenerator(); 

    useEffect(() => {
        if (availables.length == 0)        
            props.onGameFinished('inCredits');
    });

    const canHide = (number) => {
        if (availables.includes(number)) 
            return true;
        return false;
    }

    return (
            <CardList 
            cardNumbers = {cardNumbers}
            availables = {availables}
            addToSelecteds={addToSelecteds} 
            removeFromSelecteds={removeFromSelecteds} 
            canHide={canHide}>

            </CardList>
        );
}

GameField.propTypes  = {
    onGameFinished: PropTypes.func
}

export default GameField;