import { connect } from "react-redux";
import Account from "./account";
import {setAccountActionCreator} from './../../redux/accountReducer';
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {
    
    return{
        personalInfo: state.accountPage.personalInfo,
        purchaseHistory: state.accountPage.history
    }   
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAccount: (user) => dispatch(setAccountActionCreator(user))
    }
}

let WithRouterContainer = withRouter(Account);

export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainer);