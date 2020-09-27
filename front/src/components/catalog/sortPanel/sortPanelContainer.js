import {changeSortTypeActionCreator, setCatalogActionCreator, setCurrentPageActionCreator} from './../../../redux/catalogReducer';
import {connect} from "react-redux";
import SortPanel from './sortPanel';

let mapStateToProps = (state) => {
    return {
        checked: state.catalogPage.sortType,
        currentPage: state.catalogPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeSortType: (newType) => {
            dispatch(changeSortTypeActionCreator(newType));
        },
        setCatalog: (obj) => dispatch(setCatalogActionCreator(obj)),
        setCurrentPage: (page) => dispatch(setCurrentPageActionCreator(page))
    }
}

const SortPanelContainer = connect(mapStateToProps, mapDispatchToProps)(SortPanel);

export default SortPanelContainer;


