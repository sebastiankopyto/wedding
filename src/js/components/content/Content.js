import React from 'react';

import Couple from './Couple';
import Animation from './Animation';
import EventInfo from './EventInfo';

class Content extends React.Component {

    render = () => {
        return (
            <div className="content">
                <Couple />
                <Animation />
                <EventInfo />
            </div>
        );
    }
}

export default Content;