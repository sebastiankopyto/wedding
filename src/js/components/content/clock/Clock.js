import React, { useState, useEffect } from 'react';
import ClockElement from './ClockElement';

function Clock({date}) {
    const timeLeft = timeLeftToDate(date);

    const [days, setDays] = useState(timeLeft.days);
    const [hours, setHours] = useState(timeLeft.hours);
    const [minutes, setMinutes] = useState(timeLeft.minutes);
    const [seconds, setSeconds] = useState(timeLeft.seconds);

    useEffect(() => {
        const interval = setInterval(() => {
            const difference = timeLeftToDate(date);

            days === difference.days || setDays(difference.days);
            hours === difference.hours || setHours(difference.hours);
            minutes === difference.minutes || setMinutes(difference.minutes);
            seconds === difference.seconds || setSeconds(difference.seconds);
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <section id="o-wydarzeniu" className="clock">
            <div className="clock__container">
                <header className="section__header clock__header">
                    <h2 className="section__header-text clock__header-text">
                        Pozostało
                    </h2>
                </header>
                <div className="clock__content">
                    <ClockElement number={days} description="dni" />
                    <ClockElement number={hours} description="godzin" />
                    <ClockElement number={minutes} description="minut" />
                    <ClockElement number={seconds} description="sekund" />
                </div>
            </div>
        </section>
    )
}


function timeLeftToDate(date) {
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

export default Clock;