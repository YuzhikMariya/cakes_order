import React from 'react';
import s from './productList.module.css'
import { ProductContainer } from './product/productContainer';
import Axios from "axios";
import {Transition} from 'react-transition-group';

class  ProductList extends React.Component {
    

    componentDidMount(){
        let pageSize = this.props.sortCount;
        if(pageSize == 1){
            pageSize = 0;
        }
        Axios.get(`https://localhost:44340/api/catalog?page=${this.props.currentPage}&pageSize=${pageSize}`).then(res => 
        {
            this.props.setCatalog(res.data);
        });
    }

    render(){
        let sortClass = "sortBy"+this.props.sortCount;
        return (
            <div>
            {(this.props.products.length != 0 
            && Object.keys(this.props.products[0]).length !== 0)
                ? (
                    <div className={`${s.product_list} ${s[sortClass]}`}>
                    <Transition
                        in={this.props.popup}
                        timeout={500}
                        mountOnEnter
                        unmountOnExit
                        >
                        {state => <div className={`popup ${state}`}> Product added to cart</div>}
                    </Transition>
                    {this.props.products.map(el => {
                        return <ProductContainer id={el.id} photo={el.photo} title={el.title} time={el.time} price={el.price}/>
                    })}

                
    
                    </div>
                )
                : (
                        <div className={s.empty}>
                            There isn't any cake(
                        </div>
                )
            }
            </div>
            
        );
    }
    
}

export default ProductList;


