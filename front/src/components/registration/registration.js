import React from 'react';
import './registration.css';
import PersonalInfo from '../personalInfo/personalInfo';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import sha1 from 'js-sha1';
import {Transition} from 'react-transition-group';

function Registration(props) {

    let onPhoneChange = (e) => {
        props.setPhone(e.target.value);
    }

    let onFormSubmit = (e) => {
        e.preventDefault();
        const {history} = props;
        let SHA1Password = sha1(props.password);
        const postData = new FormData();
        postData.append("email", props.email);
        postData.append("password", SHA1Password);
        postData.append("name", props.name);
        postData.append("surname", props.surname);
        postData.append("phone", props.phone);

        Axios.post("https://localhost:44340/register", postData).then(res => {
            if(res.data.status == 200){
                history.push("/");
            }else{
                props.setPopup();
                setTimeout(() => props.setPopup(), 4000);
            }
            props.setEmail("");
            props.setPassword("");
            props.setName("");
            props.setSurname("");
            props.setPhone("+375-");
            props.setRole(res.data.role);
        }
        );
    }

    return (
        <div className="content">
            <Transition
                    in={props.popup}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
            >
                    {state => <div className={`popup ${state}`}>User with such email already exists</div>}
            </Transition>
            <h1>Register on MasterCake</h1>
            <form onSubmit={onFormSubmit} className="registration_form">
                <PersonalInfo title="name" type="name" onChange={props.setName} value={props.name}/>
                <PersonalInfo title="surname" type="surname" onChange={props.setSurname} value={props.surname}/>
                <div className="phone_info">
                    <label for="phone">Enter your phone (+375-xx-xxx-xx-xx):</label>
                    <input className="input_data" onChange={onPhoneChange} id="phone" type="tel" value={props.phone} pattern="^\+375-(17|25|29|33|44)-[0-9]{3}-[0-9]{2}-[0-9]{2}$" required/>
                </div>
                <PersonalInfo title="email" type="email" onChange={props.setEmail} value={props.email}/>
                <PersonalInfo title="password" type="password" onChange={props.setPassword} value={props.password}/>

                <div className="registration_form__btn">
                    <button class="btn" >Register</button>
                </div>
                    
            </form>
            <p>Already have an account? <NavLink to="/signin">Sign in to it!</NavLink></p>   
        </div>
    );
}

export default Registration;


