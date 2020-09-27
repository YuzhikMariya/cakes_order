import React from 'react';
import s from './history.module.css'
import { NavLink } from 'react-router-dom';

function History(props) {

    return (
        <div>
            {(props.history.length != 0)
            ?(
                <div className={s.purchase_history}>
                    <h3>Purchase history</h3>
                    {props.history.map((item) => {
                        return (<div className={s.history__item}>
                            <NavLink to={"cake/"+item.id}>{item.title}</NavLink>
                            <span>x {item.count}</span>
                        </div>)
                    })}
                </div>
            )  
            :(
                <div className={s.empty}>
                    Empty purchase history(
                </div>
            )
            }
        </div>
        

    );
}

export default History;


