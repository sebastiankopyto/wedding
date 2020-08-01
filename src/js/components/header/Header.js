import React from 'react';

import '../../../css/components/header/header.scss';

class Header extends React.Component {
    render = () => {
        return (
            <header className="header">
                <div class="header__container">
                    <h1 class="header__title">Kasia 💕 Patryk</h1>
                    <time class="header__datetime">23.05.2020 17:00</time>
                </div>
            </header>
        )
    }

}

export default Header;