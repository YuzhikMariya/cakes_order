import React from 'react';
import s from './personalInfo.module.css';

function PersonalInfo(props) {

    let onChange = (e) => {
        props.resetError();
        props.onChange(e.target.value);
    }

    return (
        <div className={s.personal_info}>
            <label htmlFor={props.title}>{props.title}</label>
            <input className="input_data" onChange={onChange} id={props.id} type={props.type} value={props.value} maxLength="30"/>
            <span className={s.invalid_input_info}>{props.errorText}</span>
        </div>
    );
}

export default PersonalInfo;


