import React from 'react';
import PersonalInfo from '../personalInfo/personalInfo';
import './signin.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import sha1 from 'js-sha1';

class SignIn extends React.Component {


    onClick(e){
        const {history} = this.props;
        e.preventDefault();
        let SHA1Password = sha1(this.props.password);
        const postData = new FormData();
        postData.append("email", this.props.email);
        postData.append("password", SHA1Password);
        Axios.post("https://localhost:44340/login", postData).then(res => {
            if(res.data.status == 200){
                history.push("/");
            }
            this.props.setEmail("");
            this.props.setPassword("");
            this.props.setRole(res.data.role);
            this.props.setStartPage();
        }
        );
    }

    render(){
        return (
            <div className="content">
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




