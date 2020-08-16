import React from 'react';

import EventInfoBox from './EventInfoBox';

export default function EventInfo(props) {

    const events = [
        {
            name: 'Ślub',
            date: '1 maja 2020',
            hour: '13:00',
            place: 'Kościół Narodzenia Najświętszej Maryi Panny we Frysztaku',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.386615285412!2d21.607149415942537!3d49.835192739385064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dad160165e1c5%3A0x4d92b10408676256!2zS2_Fm2Npw7PFgiBOYXJvZHplbmlhIE5NUA!5e0!3m2!1spl!2spl!4v1596567467147!5m2!1spl!2spl'
        }, {
            name: 'Wesele',
            date: '1 maja 2020',
            hour: '14:00',
            place: 'Dom ludowy we Wiśniowej',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10303.967632411783!2d20.1177531!3d49.7862171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf1b7dd3ded55f6b!2sGminny%20O%C5%9Brodek%20Kultury%20i%20Sportu%20w%20Wi%C5%9Bniowej!5e0!3m2!1spl!2spl!4v1597572588588!5m2!1spl!2spl'
        }
    ];

    const eventsList = events.map((event, index) => <EventInfoBox event={event} key={index} />);
    
    return (
        <section className="event-info">
            <div className="event-info__container">
                { eventsList }
            </div>
        </section>
    );
}