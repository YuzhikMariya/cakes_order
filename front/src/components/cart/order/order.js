import Axios from 'axios';
import React from 'react';
import s from './order.module.css';

function Order(props) {


    let decrease = (e) => {
        if(props.count > 1){
                    
            let id = e.target.parentNode.parentNode.id;
            const postData = new FormData();
            postData.append("id", id);
            postData.append("count", props.count-1);
            Axios.post("https://localhost:44340/api/cart/changeCount", postData)
            .then(() => {
                props.onDecrease(id);
            }).catch(() => {
                let {history } = props.history;
                history.push("/signin");
            });
        }
        
    }

    let increase = (e) => {
        let id = e.target.parentNode.parentNode.id;
        const postData = new FormData();
        postData.append("id", id);
        postData.append("count", props.count+1);
        Axios.post("https://localhost:44340/api/cart/changeCount", postData)
        .then(() => {
            props.onIncrease(id);
        }).catch(() => {
            let {history } = props.history;
            history.push("/signin");
        });
        
    }

    let deleteItem = (e) => {
        let id = e.target.parentNode.id;
        const postData = new FormData();
        postData.append("id", id);
        Axios.delete(`https://localhost:44340/api/cart/${id}`, {
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(() => {
            props.onDelete(id);
        }).catch(() => {
            let {history } = props.history;
            history.push("/signin");
        })
        
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


