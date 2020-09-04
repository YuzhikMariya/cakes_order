import React from 'react';
import s from './product.module.css'

function Product(props) {

    let onAddClick = (e) => {

        props.onAddClick(props.id, props.photo, props.title, props.price);
        e.preventDefault();
    }

    return (
        <div id={props.id} className={s.product}>
            <img className={s.photo} src={require(`../../../../img/${props.photo}`)} alt="cake"></img>
            <p className={s.title}>{props.title}</p>
            <div className={s.price}>{props.price} BYN</div>
            <div className={s.time}>{props.time} min</div>
            <button onClick={onAddClick} className={s.btn}>Add</button>
        </div>
    );
}

export default Product;


