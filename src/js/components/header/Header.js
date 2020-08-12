import React from 'react';

class Header extends React.Component {
    render = () => {
        return (
            <header className="header">
                <div className="header__container">
                    <h1 className="header__title">Kasia 💕 Patryk</h1>
                    <time className="header__datetime">01.05.2020 14:00</time>
                </div>
            </header>
        )
    }

}

export default Header;