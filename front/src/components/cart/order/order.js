import {PostRequestHandler, DeleteRequestHandler} from './../../../helperFunctions/requestHandler';
import React from 'react';
import s from './order.module.css';

function Order(props) {

    const rejectCallback = (history) => {
        history.push("/signin");
    }

    let decrease = (e) => {
        if(props.count > 1){      
            let id = e.target.parentNode.parentNode.id;
            const postData = new FormData();
            postData.append("id", id);
            postData.append("count", props.count-1);
            let resolveCallback = () => {props.onDecrease(id)};
            PostRequestHandler("https://localhost:44340/api/cart/changeCount", postData, resolveCallback, rejectCallback.bind(this, props.history));
        }   
    }

    let increase = (e) => {
        let id = e.target.parentNode.parentNode.id;
        const postData = new FormData();
        postData.append("id", id);
        postData.append("count", props.count+1);
        let resolveCallback = () => {props.onIncrease(id)};
        PostRequestHandler("https://localhost:44340/api/cart/changeCount", postData, resolveCallback, rejectCallback.bind(this, props.history));
    }

    let deleteItem = (e) => {
        let id = e.target.parentNode.id;
        const postData = new FormData();
        postData.append("id", id);
        const config = {
            headers: {'Content-Type': 'application/json'}
        };
        let resolveCallback = () => {
            props.onDelete(id);
        };
        DeleteRequestHandler(`https://localhost:44340/api/cart/${id}`, config, resolveCallback, rejectCallback.bind(this, props.history));
    }

    return (
        <div className={s.order} id={props.id}>
            <img className={s.photo} src={"https://localhost:44340/images/"+props.photo} alt="cake img"></img>
            <p className={s.title}>{props.title}</p>
            <div className={s.price}>Price for one: <span className={s.order_data}>{(Math.round(props.price * 100) / 100).toFixed(2)}</span> BYN</div>
            <div className={s.count}>
                Count: 
                 <div onClick={decrease} className={`${s.decrease} ${s.change_count__btn}`}>-</div>
                 <span className={s.order_data}>{props.count} </span>
                 <div onClick={increase} className={`${s.increase} ${s.change_count__btn}`}>+</div>
            </div>
            <div className={s.result_sum}>Result sum: <br/> <span className={s.order_data}>{(Math.round(props.price * props.count * 100) / 100).toFixed(2)}</span> BYN</div>
            <div onClick={deleteItem} className={s.cancel__btn} />
        </div>
    );
}

export default Order;


