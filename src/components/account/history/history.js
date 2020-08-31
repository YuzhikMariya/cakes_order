import React from 'react';
import s from './history.module.css'

function History(props) {

    return (

        <div className={s.purchase_history}>
            <h3>Purchase history</h3>
            {props.history.map((item) => {
                return (<div className={s.history__item}>
                    <a href={item.ref}>{item.title}</a>
                    <span>x {item.count}</span>
                </div>)
            })}
            
        </div>

    );
}

export default History;


