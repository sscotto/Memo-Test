import React from 'react';
import PropTypes from 'prop-types';

function TimerComponent(props) {
    return (<div className="timer">Time Remaining: {props.secondsLeft}</div>);
}

TimerComponent.propTypes = {
    secondsLeft: PropTypes.number
}

export default TimerComponent;