import React from 'react';
import './header.css';
import Logo from './logo/logo';
import Navbar from './navbar/navbar';

function Header() {

    return (
        <header>
            <Logo />
            <Navbar role="user"/>
        </header>
    );
}

export default Header;
