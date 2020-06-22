import React from 'react';
import './App.css';
import GameField from './Components/GameField';
import StartMenu from './Components/StartMenu';
import Credits from './Components/Credits';
import useApplicationState from './CustomHooks/UseApplicationState';

function App() {
  const { 
    setStatus, 
    gameStatus,     
    gameId } = useApplicationState();

  return (
    <div className="App">
      <header className="App-header">   
      {
      gameStatus === 'inMenu' ? <StartMenu startGame={setStatus} /> 
      : gameStatus === 'playing' ? <GameField key={gameId} onGameFinished={setStatus} /> 
      : <Credits startGame={setStatus} status={gameStatus} />
      }      
      </header>
    </div>
  );
}

export default App;
