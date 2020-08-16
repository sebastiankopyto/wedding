import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        const now = new Date();

        this.year = now.getFullYear();
    }

    render = () => {
        return (
            <footer className="footer">&copy; Copyright {this.year} by slub-kasi-i-patryka.pl</footer>
        ); 
    }

}

export default Footer;