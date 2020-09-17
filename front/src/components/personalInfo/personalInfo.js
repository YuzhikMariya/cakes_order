import React from 'react';

function PersonalInfo(props) {
    return (
        <div className="personal_info">
            <label for={props.title}>Enter your {props.title}:</label>
            <input className="input_data" id={props.title} type={props.type} required/>
        </div>
    );
}

export default PersonalInfo;


