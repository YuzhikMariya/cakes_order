import { connect } from "react-redux";
import {increaseCountActionCreator, decreaseCountActionCreator, deleteFromCartActionCreator} from './../../../redux/cartReducer';
import Order from "./order";
import {withRouter} from 'react-router-dom';

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

let WithRouterContainer = withRouter(Order);

export const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainer);