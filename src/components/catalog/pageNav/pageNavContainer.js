import { connect } from "react-redux";
import PageNav from './pageNav';
import {setCurrentPageActionCreator, setPageCountActionCreator, setCatalogActionCreator} from './../../../redux/catalogReducer';

let mapStateToProps = (state) => {
    return{
        currentPage: state.catalogPage.currentPage,
        pageCount: state.catalogPage.pageCount,
        pageSize: state.catalogPage.sortType
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setCurrentPage: (currPage) => dispatch(setCurrentPageActionCreator(currPage)),
        setPageCount: (count) => dispatch(setPageCountActionCreator(count)),
        setCatalog: (obj) => dispatch(setCatalogActionCreator(obj))
    }
}

export const PageNavContainer = connect(mapStateToProps, mapDispatchToProps)(PageNav);