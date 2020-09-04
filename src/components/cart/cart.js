import React from 'react';
import { OrderContainer } from './order/orderContainer';

function Cart(props) {

    let buy = () => {
        props.onBuyClick(props.cart);
    }

    return (
        <div className="content">
            <h1>Shopping cart</h1>
            {(props.cart.length !== 0)
                ? (
                    <form className="order_list">
                        {props.cart.map((value) => {
                            return <OrderContainer photo={value.photo} title={value.title} price={value.price} count={value.count} id={value.id} dispatch={props.dispatch}/>
                        })}

                        <div>
                            <button onClick={buy} class="btn">Buy</button>
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

export default Cart;


