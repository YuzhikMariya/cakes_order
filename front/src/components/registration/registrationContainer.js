import { connect } from "react-redux";
import {setRegEmailActionCreator,
        setRegPasswordActionCreator,
        setRegPhoneActionCreator,
        setRegNameActionCreator,
        setRegSurnameActionCreator,
        setRoleActionCreator,
        setPopupActionCreator} from './../../redux/registrationReducer';
import {withRouter} from 'react-router-dom';
import Registration from "./registration";

let mapStateToProps = (state) => {
    return{
        email: state.registrationPage.registration.email,
        password: state.registrationPage.registration.password,
        phone: state.registrationPage.registration.phone,
        name: state.registrationPage.registration.name,
        surname: state.registrationPage.registration.surname,
        popup: state.registrationPage.popup
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setEmail: (email) => dispatch(setRegEmailActionCreator(email)),
        setPassword: (password) => dispatch(setRegPasswordActionCreator(password)),
        setName: (name) => dispatch(setRegNameActionCreator(name)),
        setSurname: (surname) => dispatch(setRegSurnameActionCreator(surname)),
        setPhone: (phone) => dispatch(setRegPhoneActionCreator(phone)),
        setRole: (role) => dispatch(setRoleActionCreator(role)),
        setPopup: () => dispatch(setPopupActionCreator())
    }
}

let WithRouterContainer = withRouter(Registration);

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainer);