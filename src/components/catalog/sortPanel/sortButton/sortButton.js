import React from 'react';
import s from './sortButton.module.css';

function SortButton(props) {

    let changeSortType = (e) => {
        props.changeSortType(e.target.id);
    }

    if(props.isChecked === props.id){
        return (
        
            <div id={props.id} onClick={changeSortType} className={`${s.btn} ${s.checked}`}>{props.count} cakes</div>
        );
    }else{
        return (
        
            <div id={props.id} onClick={changeSortType} className={s.btn}>{props.count} cakes</div>
        );
    }
    
}

export default SortButton;


