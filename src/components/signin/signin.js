import React from 'react';
import PersonalInfo from '../personalInfo/personalInfo';
import './signin.css';
import { NavLink } from 'react-router-dom';

function SignIn() {
    return (
        <div className="content">
            <h1 className="content__header">Sign in to MasterCake</h1>
            <form className="signin_form">
                <PersonalInfo title="email" type="email"/>
                <PersonalInfo title="password" type="password"/>
        
                <input class="btn" type="submit" value="Sign in"/>
            </form>
            <p>New to MasterCake?  <NavLink to="/registration">Create an account!</NavLink></p>

        </div>
    );
}

export default SignIn;




