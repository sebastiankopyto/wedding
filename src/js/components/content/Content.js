import React from 'react';

import Couple from './couple/Couple';
import Animation from './Animation';
import Clock from './clock/Clock';
import EventInfo from './eventInfo/EventInfo';

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.eventDateTime = new Date(2021, 4, 1, 14, 0, 0, 0);
    }

    render = () => {

        return (
            <div className="content">
                <Couple />
                <Animation />
                <Clock date={this.eventDateTime}/>
                <EventInfo />
            </div>
        );
    }
}

export default Content;