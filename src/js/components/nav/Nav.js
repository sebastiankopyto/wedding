import React from 'react';

import NavLink from './NavLink';

class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.links = [
            {
                name: 'Start',
                url: '#'
            },
            {
                name: 'My',
                url: '#para-mloda'
            },
            {
                name: 'Wydarzenie',
                url: '#o-wydarzeniu'
            },
        ];
    }

    render = () => {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    {this.links.map((link, index) => 
                        <NavLink link={link} key={index} /> ) 
                    }
                    
                </ul>
            </nav>
        )
    }

}

export default Nav;