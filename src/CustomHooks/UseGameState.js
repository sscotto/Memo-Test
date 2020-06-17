import { useState } from 'react';

const useGameState = () => {
    const [selecteds, setSelecteds] = useState([]);
    const [availables, setAvailables] = useState([1, 2, 3, 4, 5, 6]); 

    const addToSelecteds = (number) => {
        let canAddToSelecteds = (selecteds.length === 2) ? false : true;
        
        if (canAddToSelecteds){                    
            let newSelecteds = selecteds.concat(number);
            setSelecteds(newSelecteds)            
            if (newSelecteds.length === 2 && newSelecteds[0] === newSelecteds[1]){ 
               
                setAvailables(availables.filter(e => e !== number ));
                setSelecteds([]);
            }           
        }
        return canAddToSelecteds;
    }       

    const removeFromSelecteds = (number) => {
        if (selecteds.length === 0) return;

        setSelecteds(selecteds.filter(s => s !== number));
    }
    return { selecteds, availables, addToSelecteds, removeFromSelecteds };
}

export default useGameState;