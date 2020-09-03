import React from 'react';
import s from './order.module.css';

function Order(props) {
    return (
        <form className={s.order}>
            <img className={s.photo} src={require(`../../../img/${props.photo}`)} alt="cake img"></img>
            <p className={s.title}>{props.title}</p>
            <div className={s.price}>Price for one: <span className={s.order_data}>{props.price}</span> BYN</div>
            <div className={s.count}>
                Count: 
                 <input className={`${s.decrease} ${s.change_count__btn}`} type="submit" value="-"/>
                 <span className={s.order_data}>{props.count} </span>
                 <input className={`${s.increase} ${s.change_count__btn}`} type="submit" value="+"/>
            </div>

            
            

            <div className={s.result_sum}>Result sum: <br/> <span className={s.order_data}>{props.price * props.count}</span> BYN</div>

            <input className={s.cancel__btn} type="submit" value=""/>
        </form>
    );
}

export default Order;


