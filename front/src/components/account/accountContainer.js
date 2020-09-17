import { connect } from "react-redux";
import Account from "./account";
import {setAccountActionCreator} from './../../redux/accountReducer';

let mapStateToProps = (state) => {
    
    return{
        personalInfo: state.accountPage.personalInfo,
        history: state.accountPage.history
    }   
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAccount: (user) => dispatch(setAccountActionCreator(user))
    }
}

export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);