import React from 'react';
import s from './order.module.css';

function Order(props) {


    let decrease = (e) => {
        let id = e.target.parentNode.parentNode.id;
        props.onDecrease(id);
    }

    let increase = (e) => {
        let id = e.target.parentNode.parentNode.id;
        props.onIncrease(id);
    }

    let deleteItem = (e) => {
        let id = e.target.parentNode.id;
        props.onDelete(id);
    }

    return (
        <div className={s.order} id={props.id}>
            <img className={s.photo} src={"https://localhost:44340/images/"+props.photo} alt="cake img"></img>
            <p className={s.title}>{props.title}</p>
            <div className={s.price}>Price for one: <span className={s.order_data}>{props.price}</span> BYN</div>
            <div className={s.count}>
                Count: 
                 <div onClick={decrease} className={`${s.decrease} ${s.change_count__btn}`}>-</div>
                 <span className={s.order_data}>{props.count} </span>
                 <div onClick={increase} className={`${s.increase} ${s.change_count__btn}`}>+</div>
            </div>

            
            

            <div className={s.result_sum}>Result sum: <br/> <span className={s.order_data}>{props.price * props.count}</span> BYN</div>

            <div onClick={deleteItem} className={s.cancel__btn} />
        </div>
    );
}

export default Order;


