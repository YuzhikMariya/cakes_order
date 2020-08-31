import React from 'react';
import s from './pageNav.module.css'
import CurrentPage from './currentPage/currentPage';

function PageNav(props) {
    return (
        <div className={s.pages}>
            <input className={`${s.first} ${s.btn}`} type="submit" value="start"/>
            <input className={`${s.prev} ${s.btn}`} type="submit" value="<"/>
            <CurrentPage current="5" max="8"/>
            <input className={`${s.next} ${s.btn}`} type="submit" value=">"/>
            <input className={`${s.last} ${s.btn}`} type="submit" value="end"/>

        </div>
    );
}

export default PageNav;


