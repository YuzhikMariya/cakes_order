import Axios from 'axios';
import React from 'react';
import { OrderContainer } from './order/orderContainer';

class Cart extends React.Component {

    componentDidMount(){

        const http = Axios.create({
            baseURL: '/',
            headers: { 'Cache-Control': 'no-cache' }
        });

        http.get("https://localhost:44340/api/cart", { cache: false }).then(res => 
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

        Axios.post("https://localhost:44340/api/cart", postData)
        .then(res => {
            this.props.onBuyClick(res.data);
        });
        e.preventDefault();
        
    }

    render(){
        return (
            <div className="content">
                <h1>Shopping cart</h1>
                {(this.props.cart.length !== 0)
                    ? (
                        <div className="order_list">
                            {this.props.cart.map((value) => {
                                return <OrderContainer photo={value.photo} title={value.title} price={value.price} count={value.count} id={value.id} dispatch={this.props.dispatch}/>
                            })}
    
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


