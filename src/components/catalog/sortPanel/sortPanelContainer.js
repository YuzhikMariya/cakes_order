import {changeSortTypeActionCreator} from './../../../redux/catalogReducer';
import {connect} from "react-redux";
import SortPanel from './sortPanel';

let mapStateToProps = (state) => {
    return {
        checked: state.catalogPage.sortType,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeSortType: (newType) => {
            dispatch(changeSortTypeActionCreator(newType));
        }
    }
}

const SortPanelContainer = connect(mapStateToProps, mapDispatchToProps)(SortPanel);

export default SortPanelContainer;


