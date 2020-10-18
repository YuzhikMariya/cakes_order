import React from 'react';
import './registration.css';
import PersonalInfo from '../personalInfo/personalInfo';
import { NavLink } from 'react-router-dom';
import {PostRequestHandler} from './../../helperFunctions/requestHandler';
import sha1 from 'js-sha1';
import {Transition} from 'react-transition-group';

class Registration extends React.Component {

    state ={
        isRepeatedPasswordValid: "",
        isPasswordValid: "",
        isEmailValid: "",
        isNameValid: "",
        isSurnameValid: "",
        isPhoneValid: ""
    }

    onPhoneChange(e){
        this.props.setPhone(e.target.value);
    }

    resetState(){
        this.setState({
            isRepeatedPasswordValid: "",
            isPasswordValid: "",
            isEmailValid: "",
            isNameValid: "",
            isSurnameValid: "",
            isPhoneValid: ""
        });
    }

    isEmpty(str) {
        if (str.trim() == ''){
            return true;
        }
        return false;
    }

    resetError(st){
        this.setState({[st]: ""});
    }


    onFormSubmit(e){
        e.preventDefault();
        this.resetState();
        let isAnyInvalid = false;
        const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phoneReg = /^\+375-(17|25|29|33|44)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        const passwordReg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        if(this.isEmpty(this.props.name)){
            this.setState({isNameValid: "Enter your name"});
            isAnyInvalid = true;
        }
        if(this.isEmpty(this.props.surname)){
            this.setState(() => {return {isSurnameValid: "Enter your surname"}});
            isAnyInvalid = true;
        }
        if(this.isEmpty(this.props.phone)){
            this.setState({isPhoneValid: "Enter your phone"});
            isAnyInvalid = true;
        }
        if(this.isEmpty(this.props.email)){
            this.setState({isEmailValid: "Enter your email"});
            isAnyInvalid = true;
        }
        if(this.isEmpty(this.props.password)){
            this.setState({isPasswordValid: "Enter your password"});
            isAnyInvalid = true;
        }
        if(this.isEmpty(this.props.repeatedPassword)){
            this.setState({isRepeatedPasswordValid: "Enter your password"});
            isAnyInvalid = true;
        }


        if(!emailReg.test(this.props.email)){
            this.setState({isEmailValid: "Enter correct email"});
            isAnyInvalid = true;
        }
        if(!phoneReg.test(this.props.phone)){
            this.setState({isPhoneValid: "Enter correct phone"});
            isAnyInvalid = true;
        }
        if(!passwordReg.test(this.props.password)){
            this.setState({isPasswordValid: "Password must contain a number, uppercase letter, lowercase letter and contain at least 6 characters"});
            isAnyInvalid = true;
        }
        if(this.props.password !== this.props.repeatedPassword && this.props.repeatedPassword !== ""){
            this.setState({isRepeatedPasswordValid: "Passwords are different"});
            isAnyInvalid = true;
        }
        
        if(isAnyInvalid){
            return;
        }

        let SHA1Password = sha1(this.props.password);
        const postData = new FormData();
        postData.append("email", this.props.email);
        postData.append("password", SHA1Password);
        postData.append("name", this.props.name);
        postData.append("surname", this.props.surname);
        postData.append("phone", this.props.phone);
        let resolveCallback = res => {
            if(res.data.status == 200){
                const {history} = this.props;
                history.push("/");
                this.props.setEmail("");
                this.props.setPassword("");
                this.props.setName("");
                this.props.setSurname("");
                this.props.setPhone("+375-");
                this.props.setRole(res.data.role);
                this.props.setRepeatedPassword("");
            }else{
                this.setState({isEmailValid: "User with such email already exists"});
            }
        };
        let rejectCallback = () => alert("Sorry, you can't register"); 
        PostRequestHandler("https://localhost:44340/register", postData, resolveCallback.bind(this), rejectCallback);
    }

    render(){
        const NAME_VALID = "isNameValid", SURNAME_VALID = "isSurnameValid", EMAIL_VALID = "isEmailValid", 
            PHONE_VALID = "isPhoneValid", PASSWORD_VALID = "isPasswordValid", REPEATED_PASSWORD_VALID = "isRepeatedPasswordValid";
        return (
            <div className="content">
                <h1>Register on MasterCake</h1>
                <form onSubmit={this.onFormSubmit.bind(this)} className="registration_form">
                    <PersonalInfo 
                        title="Enter your name:" 
                        id="name" type="name" 
                        onChange={this.props.setName} 
                        value={this.props.name} 
                        errorText={this.state[NAME_VALID]}
                        resetError={this.resetError.bind(this, NAME_VALID)}
                    />
                    <PersonalInfo 
                        title="Enter your surname:" 
                        id="surname" type="surname" 
                        onChange={this.props.setSurname} 
                        value={this.props.surname}
                        errorText={this.state[SURNAME_VALID]}
                        resetError={this.resetError.bind(this, SURNAME_VALID)}
                    />
                    <PersonalInfo 
                        title="Enter your phone (+375-xx-xxx-xx-xx):" 
                        id="phone" type="tel" 
                        onChange={this.props.setPhone} 
                        value={this.props.phone}
                        errorText={this.state[PHONE_VALID]}
                        resetError={this.resetError.bind(this, PHONE_VALID)}
                    />
                    <PersonalInfo 
                        title="Enter your email:" 
                        id="email" type="email" 
                        onChange={this.props.setEmail} 
                        value={this.props.email}
                        errorText={this.state[EMAIL_VALID]}
                        resetError={this.resetError.bind(this, EMAIL_VALID)}
                    />
                    <PersonalInfo 
                        title="Enter your password (number, upper+lowercase letter, > 6 chars):" 
                        id="password" type="password" 
                        onChange={this.props.setPassword} 
                        value={this.props.password}
                        errorText={this.state[PASSWORD_VALID]}
                        resetError={this.resetError.bind(this, PASSWORD_VALID)}
                    />
                    <PersonalInfo 
                        title="Repeat your password:"
                        id="repeated_password" 
                        type="password" 
                        onChange={this.props.setRepeatedPassword} 
                        value={this.props.repeatedPassword} 
                        errorText={this.state[REPEATED_PASSWORD_VALID]}
                        resetError={this.resetError.bind(this, REPEATED_PASSWORD_VALID)}
                    />

                    <div className="registration_form__btn">
                        <button class="btn" >Register</button>
                    </div>
                        
                </form>
                <p>Already have an account? <NavLink to="/signin">Sign in to it!</NavLink></p>   
            </div>
        );
    }
    
}

export default Registration;


