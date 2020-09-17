import React from 'react';
import s from './logo.module.css';

function Logo() {
    return (
        <div className={s.logo}>
            <img className={s.icon} src="https://localhost:44340/images/header_logo.jpg"  alt="logo icon"/>
            <p className={s.name}>MasterCake</p>
        </div>
    );
}

export default Logo;
