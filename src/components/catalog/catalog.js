import React from 'react';
import SortPanel from './sortPanel/sortPanel';
import ProductList from './productList/productList';
import PageNav from './pageNav/pageNav';


function Catalog(props) {
    return (
        <div className="content">
            <h1>Catalog</h1>
            {(props.state.catalog.length != 0)
                ? (
                    <form>
                        <SortPanel dispatch={props.dispatch} checked={props.state.sortType}/>
                        <ProductList sortCount={props.state.sortType} products={props.state.catalog}/>
                        <PageNav />
                    </form>
                )
                : (
                    <div className="empty">
                        There isn't any cake(
                    </div>
                )
            }
            
        </div>
    );
}

export default Catalog;


