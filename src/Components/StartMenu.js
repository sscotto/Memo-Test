import React from 'react';
import Button  from './StartButton'
import { PropTypes } from 'prop-types';
import Today from './Today';

function StartMenu(props) {        
    return(
        <div>
            <h1>Welcome to Memo Test.</h1>
            <Button onStartGame={props.startGame}/>
            <Today /> 
        </div>
    );    
}

StartMenu.propTypes  = {
    startGame: PropTypes.func
}

export default StartMenu;