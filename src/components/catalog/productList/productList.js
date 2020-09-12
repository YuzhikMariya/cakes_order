import React from 'react';
import s from './productList.module.css'
import { ProductContainer } from './product/productContainer';
import Axios from "axios";

class  ProductList extends React.Component {
    

    componentDidMount(){
        Axios.get("https://localhost:44340/api/catalog").then(res => 
        {
            this.props.setCatalog(res.data);
        });
    }

    render(){
        let sortClass = this.props.sortCount;
        return (
            <div className={`${s.product_list} ${s[sortClass]}`}>
                {this.props.products.map(el => {
                    return <ProductContainer id={el.id} photo={el.photo} title={el.title} time={el.time} price={el.price}/>
                })}
    
            </div>
        );
    }
    
}

export default ProductList;


