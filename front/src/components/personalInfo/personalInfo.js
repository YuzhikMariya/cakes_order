import React from 'react';

function PersonalInfo(props) {

    let onChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div className="personal_info">
            <label for={props.title}>Enter your {props.title}:</label>
            <input className="input_data" onChange={onChange} id={props.title} type={props.type} value={props.value} required/>
        </div>
    );
}

export default PersonalInfo;


