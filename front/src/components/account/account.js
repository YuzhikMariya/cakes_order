import React from 'react';
import s from './account.module.css'
import History from './history/history';
import {GetRequestHandler} from './../../helperFunctions/requestHandler';

class Account extends React.Component{

    componentDidMount(){
        let resolve = res => 
        {
            if(res.data.user != null){
                this.props.setAccount(res.data);
            }else{
                throw "Invalid user";
            }  
        };
        let rejectecallback = () => {
            const {history} = this.props;
            history.push("/signin");
        }
        GetRequestHandler("https://localhost:44340/api/user", resolve, rejectecallback);
    }

    render() {
        let user = this.props.personalInfo;
        return (
            <div className="content">
                <h1>Your account:</h1>
                <div>
                    <div className={s.info}>Surname: <span className={s.user_data}>{user.surname}</span></div>
                    <div className={s.info}>Name: <span className={s.user_data}>{user.name}</span></div>
                    <div className={s.info}>E-mail: <span className={s.user_data}>{user.email}</span></div>
                    <div className={s.info}>Phone: <span className={s.user_data}>{user.phone}</span></div>
                    <History history={this.props.purchaseHistory}/>
                </div>
            </div>
    );
    }
        
}

export default Account;


