import React from 'react';
import s from './productList.module.css'
import { ProductContainer } from './product/productContainer';
import './../../../helperFunctions/requestHandler';
import { GetRequestHandler } from './../../../helperFunctions/requestHandler';

class  ProductList extends React.Component {
    
    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    componentDidMount(){
        const MS_PER_MIN = 60*1000;
        let pageSize = this.props.sortCount;
        if(pageSize == 1){
            pageSize = 0;
        }
        let resolveCallback = (res) => 
        {
            this.props.setCatalog(res.data);
            const interval = setInterval(() => {
                this.props.decreaseTime();
                console.log('This will run every second!');
            }, MS_PER_MIN);
            this.setState({ interval: interval })
            
        };
        let rejectCallback = () => alert("Sorry, we can't load catalog");
        GetRequestHandler(`https://localhost:44340/api/catalog?page=${this.props.currentPage}&pageSize=${pageSize}`, resolveCallback, rejectCallback);
    }

    render(){
        let sortClass = "sortBy"+this.props.sortCount;
        return (
            <div>
            {(this.props.products.length != 0 
            && Object.keys(this.props.products[0]).length !== 0)
                ? (
                    <div className={`${s.product_list} ${s[sortClass]}`}>
                    {this.props.products.map(el => {
                        return <ProductContainer id={el.id} photo={el.photo} title={el.title} time={el.timeWithCookingAll} price={el.price}/>
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


