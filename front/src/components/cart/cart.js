import {GetRequestHandler, PostRequestHandler} from './../../helperFunctions/requestHandler';
import React from 'react';
import { OrderContainer } from './order/orderContainer';
import s from './cart.module.css';

class Cart extends React.Component {

    rejectCallback(history){
        history.push("/signin");
    }

    componentDidMount(){

        let resolveCallback = res => 
        {
            this.props.setCart(res.data);
        };
        GetRequestHandler("https://localhost:44340/api/cart", resolveCallback, this.rejectCallback.bind(this, this.props.history));
    }

    buy(e){
        const postData = new FormData();
        let cartItemArray = [];
        this.props.cart.forEach(element => {
            let tempObj = {
                id: element.id,
                count: element.count
            };
            cartItemArray.push(tempObj);
        });
        postData.append("list", JSON.stringify(cartItemArray));
        let resolveCallback = res => {
            this.props.onBuyClick(res.data);
        };
        PostRequestHandler("https://localhost:44340/api/cart", postData, resolveCallback, this.rejectCallback.bind(this, this.props.history));
        e.preventDefault(); 
    }

    render(){
        let resultSum = 0;
        return (
            <div className="content">
                <h1>Shopping cart</h1>
                {(this.props.cart.length !== 0)
                    ? (
                        <div className="order_list">
                            {this.props.cart.map((value) => {
                                {resultSum += value.count*value.price}
                                return <OrderContainer photo={value.photo} title={value.title} price={value.price} count={value.count} id={value.id} dispatch={this.props.dispatch}/>
                            })}
                            <div className={s.result_sum}>
                                Result sum : {resultSum}
                            </div>
                            <div>
                                <button onClick={this.buy.bind(this)} class="btn">Buy</button>
                            </div>
                                
                        </div>
                    )
                    : (
                  <div className="empty">
                    The cart is empty(
                  </div>
                )
                }
                
            </div>
        );
    }
}

export default Cart;


