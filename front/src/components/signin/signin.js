import React from 'react';
import PersonalInfo from '../personalInfo/personalInfo';
import './signin.css';
import { NavLink } from 'react-router-dom';
import {PostRequestHandler} from './../../helperFunctions/requestHandler';
import sha1 from 'js-sha1';

class SignIn extends React.Component {

    state={
        isEmailValid: "",
        isPasswordValid: ""
    }

    isEmpty(str) {
        if (str.trim() == ''){
            return true;
        }
        return false;
    }

    onClick(e){
        e.preventDefault();
        let isAnyInvalid = false;
        this.resetError("isEmailValid");
        this.resetError("isPasswordValid");
        if(this.props.email === ""){
            this.setState({isEmailValid: "Enter your email"});
            isAnyInvalid = true;
        }
        if(this.props.password === ""){
            this.setState({isPasswordValid: "Enter your password"});
            isAnyInvalid = true;
        }
        if(isAnyInvalid){
            return;
        }
        let SHA1Password = sha1(this.props.password);
        const postData = new FormData();
        postData.append("email", this.props.email);
        postData.append("password", SHA1Password);
        let resolveCallback = res => {
            if(res.data.status == 200){
                const {history} = this.props;
                history.push("/");
            }else{
                this.setState({isEmailValid: "Email or password is incorrect"});
            }
            this.props.setEmail("");
            this.props.setPassword("");
            this.props.setRole(res.data.role);
            this.props.setStartPage();
        };
        let rejectCallback = () => alert("Sorry, you can't sign in");
        PostRequestHandler("https://localhost:44340/login", postData, resolveCallback.bind(this), rejectCallback);
    }

    resetError(st){
        this.setState({[st]: ""});
    }

    render(){
        const EMAIL_VALID = "isEmailValid", PASSWORD_VALID = "isPasswordValid";
        return (
            <div className="content">
                <h1 className="content__header">Sign in to MasterCake</h1>
                <div className="signin_form">
    
                    <PersonalInfo 
                        title="Enter your email:" 
                        id="email" type="email" 
                        value={this.props.email} 
                        onChange={this.props.setEmail} 
                        errorText={this.state.isEmailValid}
                        resetError={this.resetError.bind(this, EMAIL_VALID)}
                    />
                    <PersonalInfo 
                        title="Enter your password:" 
                        id="password" 
                        type="password" 
                        value={this.props.password} 
                        onChange={this.props.setPassword}
                        errorText={this.state.isPasswordValid}
                        resetError={this.resetError.bind(this, PASSWORD_VALID)}
                    />
        
                    <button onClick={this.onClick.bind(this)} class="btn" >Sign in</button>
                </div>
                <p>New to MasterCake?  <NavLink to="/registration">Create an account!</NavLink></p>
    
            </div>
        );
    }
    
}

export default SignIn;




