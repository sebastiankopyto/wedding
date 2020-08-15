import React from 'react';

class NavLink extends React.Component {

    constructor(props) {
        super(props);

        this.link = props.link;
    }

    render = () => {
        const {name, url} = this.link;

        return (
            <li key={name} className="nav__element">
                <a onClick={this.handleLinkClick} className="nav__link" href={url}>
                    {name}
                </a>
            </li>
        )
    }

    handleLinkClick = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace(/\//, '');
        if(id && id !== "#") {
            const scrollTarget = document.querySelector(id);
            if(scrollTarget) {
                const scrollTargetTop = scrollTarget.offsetTop
                window.scrollTo({
                    top: scrollTargetTop - 60,
                    behavior: 'smooth'
                })
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}

export default NavLink;