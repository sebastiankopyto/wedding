import React from 'react';

import Couple from './couple/Couple';
import Animation from './Animation';
import Clock from './clock/Clock';
import EventInfo from './eventInfo/EventInfo';

class Content extends React.Component {

    render = () => {
        return (
            <div className="content">
                <Couple />
                <Animation />
                <Clock />
                <EventInfo />
            </div>
        );
    }
}

export default Content;