import React from 'react';
import './registration.css';
import PersonalInfo from '../personalInfo/personalInfo';

function Registration() {
    return (
        <div className="content">
            <h1>Register on MasterCake</h1>
            <form className="registration_form">
                <PersonalInfo title="name" type="name"/>
                <PersonalInfo title="surname" type="surname"/>
                <PersonalInfo title="email" type="email"/>
                <PersonalInfo title="phone" type="tel"/>
                <PersonalInfo title="password" type="password"/>

                <div className="registration_form__btn">
                    <input class="btn" type="submit" value="Register"/>
                </div>
                    
            </form>
            <p>Already have an account? <a href="#">Sign in to it!</a></p>   
        </div>
    );
}

export default Registration;


