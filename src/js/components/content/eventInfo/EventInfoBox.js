import React from 'react';

export default function EventInfoBox({event}) {
    const { name, date, hour, place, mapUrl } = event;

    return (
        <article className="event-info__box">
            <div className="event-info__info">
                <header className="section__header event-info__box-header">
                    <h3 className="section__header-text event-info__text-header">{name}</h3>
                </header>
                <p className="event-info__text">{date}</p>
                <p className="event-info__text">{hour}</p>
                <p className="event-info__text">{place}</p>
            </div>
            <div className="event-info__map">
                <iframe className="event-info__iframe" 
                        src={mapUrl} 
                        width="600" 
                        height="450" 
                        frameBorder="0" 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0" 
                        title="Google Maps"></iframe>
            </div>
        </article>
    )
}