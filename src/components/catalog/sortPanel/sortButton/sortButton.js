import React from 'react';
import s from './sortButton.module.css';
import {changeSortTypeActionCreator} from './../../../../redux/catalogReducer';

function SortButton(props) {



    let changeSortType = (e) => {
        props.dispatch(changeSortTypeActionCreator(e.target.id));
    }

    if(props.isChecked == props.id){
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


