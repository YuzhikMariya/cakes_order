import React from 'react';
import s from './cake.module.css'

function Cake(props) {

    return (
        <div class="content">
            <h1 class="content__header">{props.title}</h1>
            <div id={props.id} className={s.cake}>
                <img className={s.photo} src={"https://localhost:44340/images/"+props.photo} alt="cake"></img>
                <div className={s.price}><b>Price: </b>{(Math.round(props.price * 100) / 100).toFixed(2)} BYN</div>
                <div className={s.time}><b>Time: </b>{props.time} hours</div>
                <p className={s.description}>{props.description}</p>
            </div>

        </div>

        
    );
}

export default Cake;


