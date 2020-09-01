import React from 'react';
import s from './cakeInfo.css';

function CakeInfo(props) {
    return (
        <div className={s[props.title]}>
            <label for={props.title}>Cake {props.title}:</label>
            <input ref={props.ref} className="input_data" id={props.title} type={props.type} required/>
        </div>
    );
}

export default CakeInfo;


