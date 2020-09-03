import React from 'react';
import s from './product.module.css'

function Product(props) {
    return (
        <div className={s.product}>
            <img className={s.photo} src={require(`../../../../img/${props.photo}`)} alt="cake"></img>
            <p className={s.title}>{props.title}</p>
            <div className={s.price}>{props.price} BYN</div>
            <div className={s.time}>{props.time} min</div>
            <input className={s.btn} type="submit" value="Add"/>
        </div>
    );
}

export default Product;


