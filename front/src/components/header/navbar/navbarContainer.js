import { connect } from "react-redux";
import Navbar from "./navbar";
import {setRoleActionCreator} from './../../../redux/registrationReducer';
import {setCartActionCreator} from './../../../redux/cartReducer';

let mapStateToProps = (state) => {
    let cartCount = 0;
    state.cartPage.cart.map(el => {
            cartCount += el.count;
    })
    return{
        role: state.registrationPage.role,
        cartCount: cartCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setRole: (role) => dispatch(setRoleActionCreator(role)),
        setCart: (cart) => dispatch(setCartActionCreator(cart))
    }
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);