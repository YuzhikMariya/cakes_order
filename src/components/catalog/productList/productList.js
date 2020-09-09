import React from 'react';
import s from './productList.module.css'
import { ProductContainer } from './product/productContainer';

function ProductList(props) {
    let sortClass = props.sortCount;
    return (
        <div className={`${s.product_list} ${s[sortClass]}`}>
            {props.products.map(el => {
                return <ProductContainer id={el.id} photo={el.photo} title={el.title} time={el.time} price={el.price}/>
            })}

        </div>
    );
}

export default ProductList;


