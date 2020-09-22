import React from 'react';
import './registration.css';
import PersonalInfo from '../personalInfo/personalInfo';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import sha1 from 'js-sha1';

function Registration(props) {

    let onClick = (e) => {
        const {history} = props;
        e.preventDefault();
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
            }
            props.setEmail("");
            props.setPassword("");
            props.setName("");
            props.setSurname("");
            props.setPhone("");
            props.setRole(res.data.role);
        }
        );
    }

    return (
        <div className="content">
            <h1>Register on MasterCake</h1>
            <form className="registration_form">
                <PersonalInfo title="name" type="name" onChange={props.setName} value={props.name}/>
                <PersonalInfo title="surname" type="surname" onChange={props.setSurname} value={props.surname}/>
                <PersonalInfo title="email" type="email" onChange={props.setEmail} value={props.email}/>
                <PersonalInfo title="phone" type="tel" onChange={props.setPhone} value={props.phone}/>
                <PersonalInfo title="password" type="password" onChange={props.setPassword} value={props.password}/>

                <div className="registration_form__btn">
                    <button onClick={onClick} class="btn" >Register</button>
                </div>
                    
            </form>
            <p>Already have an account? <NavLink to="/signin">Sign in to it!</NavLink></p>   
        </div>
    );
}

export default Registration;


