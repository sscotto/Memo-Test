import React from 'react';
import { PropTypes } from 'prop-types';

function TriesDisplay(props) {

    const SetDisplayColor = (triesLeft) => {
        if (triesLeft > 6)
            return 'green';
        if (triesLeft <= 6 && triesLeft > 3)
            return 'yellow';
        if (triesLeft <= 3)
            return 'red';
    }

    return(<p         
        style={{ color: SetDisplayColor(props.triesLeft)} }>
            You got {props.triesLeft} tries.
        </p>)
}

TriesDisplay.propTypes = {
    triesLeft: PropTypes.number,
}

export default TriesDisplay;