import { connect } from "react-redux";
import SignIn from "./signin";
import {setEmailActionCreator, setPasswordActionCreator, setRoleActionCreator} from './../../redux/registrationReducer';
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {
    return{
        email: state.registrationPage.currentEmail,
        password: state.registrationPage.currentPassword
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setEmail: (email) => dispatch(setEmailActionCreator(email)),
        setPassword: (password) => dispatch(setPasswordActionCreator(password)),
        setRole: (role) => dispatch(setRoleActionCreator(role))
    }
}

let WithRouterContainer = withRouter(SignIn);

export const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainer);