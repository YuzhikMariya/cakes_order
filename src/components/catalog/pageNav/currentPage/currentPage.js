import React from 'react';
import s from './currentPage.module.css'

function CurrentPage(props) {
    let pages = [];
    let currentPage = parseInt(props.current);
    let maxPage = Math.min(parseInt(props.max), currentPage+2);
    let minPage = Math.max(1, currentPage-2);



    let tempBtn;
    for(let i = minPage; i < currentPage; i++){
        tempBtn = <button className={s.page}>{i}</button>
        pages.push(tempBtn);
    }

    tempBtn = <button className={`${s.page} ${s.current}`}>{currentPage}</button>;
    pages.push(tempBtn);

    for(let i = currentPage+1; i <= maxPage; i++){
        tempBtn = <button className={s.page}>{i}</button>
        pages.push(tempBtn);
    }

    return (
        <div className={s.pages}>
            {pages}
        </div>
    );
}

export default CurrentPage;


