import { connect } from "react-redux";
import Cart from "./cart";
import {buyActionCreator, setCartActionCreator} from './../../redux/cartReducer';

let mapStateToProps = (state) => {
    return{
        cart: state.cartPage.cart
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCart: (cart) => {
            dispatch(setCartActionCreator(cart));
        },
        onBuyClick: () => {
            dispatch(buyActionCreator());
        }
    }
}

export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);