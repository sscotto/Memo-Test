import { useState } from 'react';

const useApplicationState = () => {
    const [gameStatus, setGameStatus] = useState('inMenu');
    const [gameId, setGameId] = useState(0);

  

    const setStatus = (status) => {    
      if (status === 'playing')
        setGameId(gameId + 1);
      setGameStatus(status);
    }


    return {gameStatus, gameId, setStatus };
}

export default useApplicationState;