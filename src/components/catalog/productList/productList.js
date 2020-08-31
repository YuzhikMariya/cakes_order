import React from 'react';
import s from './productList.module.css'
import Product from './product/product';

function ProductList(props) {
    let sortClass = props.sortCount;
    return (
        <div className={`${s.product_list} ${s[sortClass]}`}>
            {props.products.map(el => {
                return <Product photo={el.photo} title={el.title} time={el.time} price={el.price}/>
            })}

        </div>
    );
}

export default ProductList;


