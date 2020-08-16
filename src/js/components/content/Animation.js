import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import {ReactComponent as ReactImage} from '../../../gfx/couple.svg';

class Animation extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef(null);

        this.woman = null;
        this.man = null;

        gsap.registerPlugin(ScrollTrigger);
    }

    componentDidMount = () => {
        const container = this.imageRef.current.children[0];
        const svg = container.children[0];
        const svgElements = svg.children;

        const [,, woman, man] = svgElements;
        
        gsap.from(man, {
            scrollTrigger: {
              trigger: svg,
              scrub: true,
              start: 'top 70%',
              end: 'top top',
            },
            x: '-200px',
            opacity: 0,
          });
          
          gsap.from(woman, {
            scrollTrigger: {
              trigger: svg,
              scrub: true,
              start: 'top 70%',
              end: 'top top',
            },
            opacity: 0,
            x: '200px',
          });
        
    }

    render = () => {
        return (
            <section ref={this.imageRef} className="animation">
                <div className="animation__container">
                    <ReactImage />
                </div>
            </section>
        );
    }

}

export default Animation;