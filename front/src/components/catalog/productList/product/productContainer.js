import { connect } from "react-redux";
import Product from "./product";
import {addToCartActionCreator} from './../../../../redux/cartReducer';
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {
    return{

    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onAddClick: (id, photo, title, price) => {
            dispatch(addToCartActionCreator(id, photo, title, price));
        }
    }
}

let WithRouterContainer = withRouter(Product);

export const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainer);