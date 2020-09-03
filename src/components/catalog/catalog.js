import React from 'react';
import PageNav from './pageNav/pageNav';
import SortPanelContainer from './sortPanel/sortPanelContainer';
import { ProductListContainer } from './productList/productListContainer';


function Catalog(props) {
    return (
        <div className="content">
            <h1>Catalog</h1>
            {(props.state.catalog.length !== 0)
                ? (
                    <form>
                        <SortPanelContainer />
                        <ProductListContainer />
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


