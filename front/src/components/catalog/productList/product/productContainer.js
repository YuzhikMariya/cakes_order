import { connect } from "react-redux";
import Product from "./product";
import {addToCartActionCreator} from './../../../../redux/cartReducer';
import {setPopupActionCreator} from './../../../../redux/catalogReducer';

let mapStateToProps = (state) => {
    return{

    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onAddClick: (id, photo, title, price) => {
            dispatch(addToCartActionCreator(id, photo, title, price));
        },
        setPopup: () => {dispatch(setPopupActionCreator())}
    }
}

export const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);