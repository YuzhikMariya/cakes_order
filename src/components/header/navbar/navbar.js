import React from 'react';
import s from './navbar.module.css';

function Navbar(props) {
    return (
        <nav>
            <a className={s.item} href="#">{props.navItems[0].title}</a>
        </nav>
    );
}

export default Navbar;
