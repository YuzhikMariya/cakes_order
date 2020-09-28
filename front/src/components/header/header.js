import React from 'react';
import './header.css';
import Logo from './logo/logo';
import { NavbarContainer } from './navbar/navbarContainer';

function Header() {
    return (
        <header>
            <Logo />
            <NavbarContainer/>
        </header>
    );
}

export default Header;
