import React from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import man from '../../../gfx/man.jpg';
import woman from '../../../gfx/woman.jpg';
import heart from '../../../gfx/heart.svg';

class Couple extends React.Component {

    constructor(props) {
        super(props);

        this.container = null;

        this.person1 = null;
        this.person2 = null;

        gsap.registerPlugin(ScrollTrigger);
    }

    componentDidMount = () => {
        gsap.from(this.person1, {
            scrollTrigger: {
                trigger: this.container,
                start: '70% bottom',
                end: '80% 80%'
            },
            x: '-100%',
            duration: 1,
            opacity: 0,
        });

        gsap.from(this.person2, {
            scrollTrigger: {
                trigger: this.container,
                start: '70% bottom',
                end: '80% 80%'
            },
            x: '100%',
            duration: 1,
            opacity: 0,
        });

    }

    render = () => {
        return (
            <section className="couple" ref={div => this.container = div}>
                <div className="couple__container">
                    <header className="couple__header">
                        <h1 className="couple__header-text">
                            My
                        </h1>
                    </header>

                    <section className="couple__couple">
                        <input type="checkbox" autoComplete="off" className="couple__checkbox" name="person1" id="person1"/>
                        <article ref={div => this.person1 = div} className="couple__person">
                            <label className="couple__label" htmlFor="person1">
                                <figure className="couple__figure">
                                    <img className="couple__image" src={woman} alt="Man" />
                                </figure>
                                <div className="couple__description">
                                    Cześć, jestem Kasia
                                </div>
                                <div className="couple__name">
                                    Pani Młoda
                                </div>
                            </label>
                        </article>
                        <img className="couple__heart" src={heart} alt="heart" />
                        <input type="checkbox" autoComplete="off" className="couple__checkbox" name="person2" id="person2"/>
                        <article ref={div => this.person2 = div} className="couple__person">
                            <label className="couple__label" htmlFor="person2">
                                <figure className="couple__figure">
                                    <img className="couple__image" src={man} alt="Man" />
                                </figure>
                                <header className="couple__info">
                                    <div className="couple__description">
                                        Cześć, jestem Patryk
                                    </div>
                                    <div className="couple__name">
                                        Pan Młody
                                    </div>
                                </header>
                            </label>
                        </article>
                    </section>
                </div>
            </section>
        )
    }
}

export default Couple;