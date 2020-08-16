import React from 'react';
import ClockElement from './ClockElement';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        
        this.eventDate = new Date(2021, 4, 1, 14, 0, 0, 0);

        this.state = this.getTimeToEvent(this.eventDate);
    }

    getTimeToEvent = (date) => {

        const now = new Date();

        let difference = date.getTime() - now.getTime();
        const SECONDS_DIV = 1000;
        const MINUTES_DIV = SECONDS_DIV * 60;
        const HOURS_DIV = MINUTES_DIV * 60;
        const DAYS_DIV = HOURS_DIV * 24;

        const days = Math.floor(difference / DAYS_DIV);
        difference = difference - ( days * DAYS_DIV );
        const hours = Math.floor(difference / HOURS_DIV );
        difference = difference - ( hours * HOURS_DIV );
        const minutes = Math.floor(difference / MINUTES_DIV );
        difference = difference - ( minutes * MINUTES_DIV );
        const seconds = Math.floor(difference / SECONDS_DIV );
        difference = difference - ( seconds * SECONDS_DIV );
        
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    tick = () => {
        this.setState((state, props) => (this.getTimeToEvent(this.eventDate)));
    }

    componentDidMount = () => {
        setInterval(this.tick, 1000);
    }

    render = () => {

        return (
            <section id="o-wydarzeniu" className="clock">
                <div className="clock__container">
                    <header className="section__header clock__header">
                        <h2 className="section__header-text clock__header-text">
                            Pozostało
                        </h2>
                    </header>
                    <div className="clock__content">
                        <ClockElement number={this.state.days} description="dni" />
                        <ClockElement number={this.state.hours} description="godzin" />
                        <ClockElement number={this.state.minutes} description="minut" />
                        <ClockElement number={this.state.seconds} description="sekund" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Clock;