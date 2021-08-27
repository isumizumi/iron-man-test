import React from 'react';
import '../styles/pages.css'
import logo from '../images/logogiphy.png'
import Routes from '../components/Routes.js'

function Welcome() {
    return (
        <div>
            <h3 className="header">WELCOME TO YOUR GIPHY</h3>
            <img src={logo} alt="logo" className="logo" />
            <Routes />
        </div>
    );
}

export default Welcome;