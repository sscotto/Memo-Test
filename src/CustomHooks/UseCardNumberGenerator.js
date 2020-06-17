import { useState, useEffect } from 'react';


const utils = {
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

const createRandomNumbers = () => {
    let cardsNumbers = utils.range(1, 6).concat(utils.range(1, 6));   
    let shuffleCardNumbers =  shuffle(cardsNumbers);
    return  shuffleCardNumbers;
}

const useCardNumberGenerator = () => {
    const [cardNumbers, setCardNumbers] = useState([]);

    //Es correcto usar el useEffect para llenar una unica vez el arreglo con numeros randoms?
    useEffect(() => {
        if (cardNumbers.length == 0)
            setCardNumbers(createRandomNumbers());
    })

    return { cardNumbers };
}

export default useCardNumberGenerator;