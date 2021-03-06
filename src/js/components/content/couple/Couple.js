import React from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CouplePerson from './CouplePerson';

import man from '../../../../gfx/man.jpg';
import woman from '../../../../gfx/woman.jpg';
import heart from '../../../../gfx/heart.svg';

class Couple extends React.Component {

    constructor(props) {
        super(props);

        // Init refs
        this.container = React.createRef(null);

        this.person1 = React.createRef(null);
        this.person2 = React.createRef(null);

        this.persons = [
            {
                name: 'Pani Młoda',
                photo: woman,
            },
            {
                name: 'Pan Młody',
                photo: man,
            }
        ]

        gsap.registerPlugin(ScrollTrigger);
    }

    componentDidMount = () => {
        // get nodes from refs
        const person2 = this.person2.current,
            person1 = this.person1.current,
            container = this.container.current;


        //gsap animations
        gsap.from(person1, {
            scrollTrigger: {
                trigger: container,
                start: '70% bottom',
                end: '80% 80%'
            },
            x: '-100%',
            duration: 1,
            opacity: 0,
        });


        gsap.from(person2, {
            scrollTrigger: {
                trigger: container,
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
            <section id="para-mloda" className="couple" ref={this.container}>
                <div className="couple__container">
                    <header className="section__header couple__header">
                        <h1 className="section__header-text couple__header-text">
                            My
                        </h1>
                    </header>

                    <section className="couple__couple">
                        <CouplePerson person={this.persons[0]} index={1} innerRef={this.person1} />

                        <img className="couple__heart" src={heart} alt="heart" />

                        <CouplePerson person={this.persons[1]} index={2} innerRef={this.person2} />
                    </section>
                </div>
            </section>
        )
    }
}

export default Couple;