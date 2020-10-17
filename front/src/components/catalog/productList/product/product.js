import React from 'react';
import s from './product.module.css'
import { NavLink } from 'react-router-dom';
import {PostRequestHandler} from './../../../../helperFunctions/requestHandler';

function Product(props) {

    let onAddClick = (e) => {
        const postData = new FormData();
        postData.append("id", props.id);
        let resolveCallback = res => {
            props.onAddClick(res.data.id, res.data.photo, res.data.title, res.data.price);
            props.setPopup();
            setTimeout(() => props.setPopup(), 4000);
        };
        let rejectCallback = history => {
            history.push("/signin");
        }
        PostRequestHandler("https://localhost:44340/api/catalog", postData, resolveCallback, rejectCallback.bind(this, props.history));
        e.preventDefault();
    }

    return (
        <div id={props.id} className={s.product}>
            <NavLink to={"cake/"+props.id}>
                <img className={s.photo} src={"https://localhost:44340/images/"+props.photo} alt="cake"></img>
                <p className={s.title}>{props.title}</p>
                <div className={s.price}>{(Math.round(props.price * 100) / 100).toFixed(2)} BYN</div>
                <div className={s.time}>{props.time} hours</div>
                <button onClick={onAddClick} className={s.btn}>Add</button>
            </NavLink>
        </div>
    );
}

export default Product;


