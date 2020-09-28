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
            this.props.setCart(res.data);
        })
        .catch(() => {
            const {history} = this.props;
            history.push("/signin");
        });
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
        }).catch(() => {
            const {history} = this.props;
            history.push("/signin");
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


