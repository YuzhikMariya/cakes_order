import React from 'react';
import s from './account.module.css'
import History from './history/history';

function Account(props) {

    let user = props.state.personalInfo;
    return (
        <div className="content">
            <h1>Your account:</h1>
            <div>
                <div className={s.info}>Surname: <span className={s.user_data}>{user.surname}</span></div>
                <div className={s.info}>Name: <span className={s.user_data}>{user.name}</span></div>
                <div className={s.info}>E-mail: <span className={s.user_data}>{user.email}</span></div>
                <div className={s.info}>Phone: <span className={s.user_data}>{user.phone}</span></div>
                <History history={props.state.history}/>
            </div>
            
        </div>
    );
}

export default Account;


