import React from 'react';
import s from './account.module.css'

function Account(props) {
    console.log(props);
    let historyList = [];
    if(props.history.length != 0){
        for (let item of props.history) {
            let tempDiv = 
                <div className={s.history__item}>
                    <a href={item.ref}>{item.title}</a>
                    <span>x {item.count}</span>
                </div>
            historyList.push(tempDiv);       
        }
        
    }
    return (
        <div className="content">
            <h1>Your account:</h1>
            <div>
                <div className={s.info}>Surname: <span className={s.user_data}>{props.surname}</span></div>
                <div className={s.info}>Name: <span className={s.user_data}>{props.name}</span></div>
                <div className={s.info}>E-mail: <span className={s.user_data}>{props.email}</span></div>
                <div className={s.info}>Phone: <span className={s.user_data}>{props.phone}</span></div>
                <div className={s.purchase_history}>
                    <h3>Purchase history</h3>
                    {historyList}
                </div>
            </div>
            
        </div>
    );
}

export default Account;


