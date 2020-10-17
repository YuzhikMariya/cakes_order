import React from 'react';
import PersonalInfo from '../personalInfo/personalInfo';
import './signin.css';
import { NavLink } from 'react-router-dom';
import {PostRequestHandler} from './../../helperFunctions/requestHandler';
import sha1 from 'js-sha1';
import {Transition} from 'react-transition-group';

class SignIn extends React.Component {


    onClick(e){
        e.preventDefault();
        let SHA1Password = sha1(this.props.password);
        const postData = new FormData();
        postData.append("email", this.props.email);
        postData.append("password", SHA1Password);
        let resolveCallback = res => {
            if(res.data.status == 200){
                const {history} = this.props;
                history.push("/");
            }else{
                this.props.setPopup();
                setTimeout(() => this.props.setPopup(), 4000);
            }
            this.props.setEmail("");
            this.props.setPassword("");
            this.props.setRole(res.data.role);
            this.props.setStartPage();
        };
        let rejectCallback = () => alert("Sorry, you can't sign in");
        PostRequestHandler("https://localhost:44340/login", postData, resolveCallback.bind(this), rejectCallback);
    }

    render(){
        return (
            <div className="content">
                <Transition
                    in={this.props.popup}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => <div className={`popup ${state}`}> Incorrect email or password</div>}
                </Transition>
                <h1 className="content__header">Sign in to MasterCake</h1>
                <div className="signin_form">
    
                    <PersonalInfo title="email" type="email" value={this.props.email} onChange={this.props.setEmail}/>
                    <PersonalInfo title="password" type="password" value={this.props.password} onChange={this.props.setPassword}/>
        
                    <button onClick={this.onClick.bind(this)} class="btn" >Sign in</button>
                </div>
                <p>New to MasterCake?  <NavLink to="/registration">Create an account!</NavLink></p>
    
            </div>
        );
    }
    
}

export default SignIn;




