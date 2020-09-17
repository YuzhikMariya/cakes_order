import { connect } from "react-redux";
import {changeDescriptionActionCreator, 
    changePhotoActionCreator, 
    changePriceActionCreator, 
    changeTitleActionCreator, 
    changeTimeActionCreator, 
    postDataActionCreator} from './../../redux/newCakeReducer';
import Admin from "./admin";

let mapStateToProps = (state) => {
    return {
    
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onTitleChange: (text) => dispatch(changeTitleActionCreator(text)),
        onTimeChange: (time) => dispatch(changeTimeActionCreator(time)),
        onPriceChange: (price) => dispatch(changePriceActionCreator(price)),
        onPhotoChange: (photo) => dispatch(changePhotoActionCreator(photo)),
        onDescriptionChange: (text) => dispatch(changeDescriptionActionCreator(text)),
        onAdd: () => dispatch(postDataActionCreator())
    }
}

export const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);