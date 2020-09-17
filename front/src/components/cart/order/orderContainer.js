import { connect } from "react-redux";
import {increaseCountActionCreator, decreaseCountActionCreator, deleteFromCartActionCreator} from './../../../redux/cartReducer';
import Order from "./order";

let mapStateToProps = (state) => {
    return{

    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onIncrease: (id) => {
            dispatch(increaseCountActionCreator(id));
        },
        onDecrease: (id) => {
            dispatch(decreaseCountActionCreator(id));
        },
        onDelete: (id) => {
            dispatch(deleteFromCartActionCreator(id));
        }
    }
}

export const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);