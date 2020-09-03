import React from 'react';
import './header.css';
import Logo from './logo/logo';
import Navbar from './navbar/navbar';

function Header(props) {

    console.log(props);
    return (
        <header>
            <Logo />
            <Navbar role={props.role}/>
        </header>
    );
}

export default Header;
