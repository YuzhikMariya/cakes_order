import { connect } from "react-redux";
import ProductList from "./productList";

let mapStateToProps = (state) => {
    return{
        products: state.catalogPage.catalog,
        sortCount: state.catalogPage.sortType
    }   
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);