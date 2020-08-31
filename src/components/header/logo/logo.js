import React from 'react';
import s from './logo.module.css';
import logoImg from '../../../img/header_logo.jpg'

function Logo() {
    return (
        <div className={s.logo}>
            <img className={s.icon} src={logoImg} alt="logo icon"/>
            <p className={s.name}>MasterCake</p>
        </div>
    );
}

export default Logo;
