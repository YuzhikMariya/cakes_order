import React from 'react';
import s from './product.module.css'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

function Product(props) {

    let onAddClick = (e) => {

        const postData = new FormData();
        postData.append("id", props.id);

        Axios.post("https://localhost:44340/api/catalog", postData)
        .then(res => {
            props.onAddClick(res.data.id, res.data.photo, res.data.title, res.data.price);
        });

        
        e.preventDefault();
    }

    return (
        <div id={props.id} className={s.product}>
            <NavLink to={"cake/"+props.id}>
                <img className={s.photo} src={"https://localhost:44340/images/"+props.photo} alt="cake"></img>
                <p className={s.title}>{props.title}</p>
                <div className={s.price}>{props.price} BYN</div>
                <div className={s.time}>{props.time} min</div>
                <button onClick={onAddClick} className={s.btn}>Add</button>
            </NavLink>
            
        </div>
    );
}

export default Product;


