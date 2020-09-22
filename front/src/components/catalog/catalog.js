import React from 'react';
import SortPanelContainer from './sortPanel/sortPanelContainer';
import { ProductListContainer } from './productList/productListContainer';
import { PageNavContainer } from './pageNav/pageNavContainer';


function Catalog(props) {
    return (
        
        <div className="content">
            <h1>Catalog</h1>
            {(props.catalogLength !== 0)
                ? (
                    <form>
                        <SortPanelContainer />
                        <ProductListContainer />
                        <PageNavContainer />
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


