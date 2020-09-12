import Axios from 'axios';
import React from 'react';
import { OrderContainer } from './order/orderContainer';

class Cart extends React.Component {

    componentDidMount(){
        Axios.get("https://localhost:44340/api/cart").then(res => 
        {
            let cart = [];
            res.data.cartList.forEach(element => {
                let tempObj = {
                    id: element.cake.id, 
                    photo: element.cake.photo,
                    title: element.cake.title,
                    price: element.cake.price,
                    count: element.count
                };
                cart.push(tempObj);
            });
            this.props.setCart(cart);
        })
    }

    buy(){
        this.props.onBuyClick(this.props.cart);
    }

    render(){
        return (
            <div className="content">
                <h1>Shopping cart</h1>
                {(this.props.cart.length !== 0)
                    ? (
                        <form className="order_list">
                            {this.props.cart.map((value) => {
                                return <OrderContainer photo={value.photo} title={value.title} price={value.price} count={value.count} id={value.id} dispatch={this.props.dispatch}/>
                            })}
    
                            <div>
                                <button onClick={this.buy} class="btn">Buy</button>
                            </div>
                                
                        </form>
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


