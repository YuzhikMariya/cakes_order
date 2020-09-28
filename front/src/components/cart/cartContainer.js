import { connect } from "react-redux";
import Cart from "./cart";
import {buyActionCreator, setCartActionCreator} from './../../redux/cartReducer';
import {withRouter} from 'react-router-dom';

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

let WithRouterContainer = withRouter(Cart);

export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainer);