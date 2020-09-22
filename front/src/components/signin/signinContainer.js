import { connect } from "react-redux";
import SignIn from "./signin";
import {setEmailActionCreator, setPasswordActionCreator, setRoleActionCreator, setPopupActionCreator} from './../../redux/registrationReducer';
import {setCurrentPageActionCreator} from './../../redux/catalogReducer';
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {
    return{
        email: state.registrationPage.currentEmail,
        password: state.registrationPage.currentPassword,
        popup: state.registrationPage.popup
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setEmail: (email) => dispatch(setEmailActionCreator(email)),
        setPassword: (password) => dispatch(setPasswordActionCreator(password)),
        setRole: (role) => dispatch(setRoleActionCreator(role)),
        setStartPage: () => dispatch(setCurrentPageActionCreator(1)),
        setPopup: () => dispatch(setPopupActionCreator())
    }
}

let WithRouterContainer = withRouter(SignIn);

export const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainer);