import React from 'react';
import SortPanel from './sortPanel/sortPanel';
import ProductList from './productList/productList';
import PageNav from './pageNav/pageNav';


function Catalog(props) {
    return (
        <div className="content">
            <h1>Catalog</h1>
            {(props.list.length != 0)
                ? (
                    <form>
                        <SortPanel checked={props.sort}/>
                        <ProductList sortCount={props.sort} products={props.list}/>
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


