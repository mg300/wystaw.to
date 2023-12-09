import React from 'react';
import './TopBar.css';
import logo from '../src/images/Logow.png'



const TopBar = () => {
    return (
        <div id="topBar">
            <div className="left">
                <img src={logo} alt="Footer Logo" className="footer-logo"/>
            </div>
            <div className="right">
                <button>Dodaj ogłoszenie</button>
                <button>Wiadomości</button>
                <button>Zaloguj</button>
            </div>
        </div>
    );
};

export default TopBar;
