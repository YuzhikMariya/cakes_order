import { connect } from "react-redux";
import ProductList from "./productList";
import {setCatalogActionCreator} from './../../../redux/catalogReducer';

let mapStateToProps = (state) => {
    
    return{
        products: state.catalogPage.catalog,
        sortCount: state.catalogPage.sortType,
        currentPage: state.catalogPage.currentPage,
        popup:state.catalogPage.popup
    }   
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCatalog: (arr) => dispatch(setCatalogActionCreator(arr))
    }
}

export const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);