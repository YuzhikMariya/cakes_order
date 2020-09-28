import { connect } from "react-redux";
import Navbar from "./navbar";
import {setRoleActionCreator} from './../../../redux/registrationReducer';

let mapStateToProps = (state) => {
    return{
        role: state.registrationPage.role
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setRole: (role) => dispatch(setRoleActionCreator(role))
    }
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);