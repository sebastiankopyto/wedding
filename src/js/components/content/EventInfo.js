import React from 'react';

class EventInfo extends React.Component {


    render = () => {
        return (
            <section className="event-info">
                <div className="event-info__container">
                    <div className="event-info__box">
                        <div className="event-info__info">
                            <h3 className="event-info__text-header">Ślub</h3>
                            <p className="event-info__text">1 maja 2020</p>
                            <p className="event-info__text">14:00</p>
                            <p className="event-info__text">Kościół Narodzenia Najświętszej Maryi Panny we Frysztaku</p>
                        </div>
                        <div className="event-info__map">
                            <iframe className="event-info__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.386615285412!2d21.607149415942537!3d49.835192739385064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dad160165e1c5%3A0x4d92b10408676256!2zS2_Fm2Npw7PFgiBOYXJvZHplbmlhIE5NUA!5e0!3m2!1spl!2spl!4v1596567467147!5m2!1spl!2spl" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Google Maps"></iframe>
                        </div>
                    </div>
                    <div className="event-info__box">
                        <div className="event-info__map">
                            <iframe className="event-info__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.386615285412!2d21.607149415942537!3d49.835192739385064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dad160165e1c5%3A0x4d92b10408676256!2zS2_Fm2Npw7PFgiBOYXJvZHplbmlhIE5NUA!5e0!3m2!1spl!2spl!4v1596567467147!5m2!1spl!2spl" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Google Maps"></iframe>
                        </div>
                        <div className="event-info__info">
                            <h3 className="event-info__text-header">Wesele</h3>
                            <p className="event-info__text">1 maja 2020</p>
                            <p className="event-info__text">14:00</p>
                            <p className="event-info__text">Kościół Narodzenia Najświętszej Maryi Panny we Frysztaku</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default EventInfo;