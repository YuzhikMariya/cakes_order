import React from 'react';
import Order from './order/order'

function Cart(props) {
    return (
        <div className="content">
            <h1>Shopping cart</h1>
            {(props.state.cart.length !== 0)
                ? (
                    <form className="order_list">
                        {props.state.cart.map((value) => {
                            return <Order photo={value.photo} title={value.title} price={value.price} count={value.count} />
                        })}

                        <div>
                            <input class="btn" type="submit" value="Buy"/>
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


