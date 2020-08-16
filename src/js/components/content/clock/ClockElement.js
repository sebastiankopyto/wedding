import React from 'react';

function ClockElement(props) {
    return (
        <div className="clock__element">
            <div className="clock__number">{props.number}</div>
            <div className="clock__description">{props.description}</div>
        </div>
    )
}

export default ClockElement;