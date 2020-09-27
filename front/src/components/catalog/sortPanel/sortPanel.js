import Axios from 'axios';
import React from 'react';
import s from './sortPanel.module.css'

function SortPanel(props) {

    let onSortClick = (e) => {

        let pageSize = e.target.id;
        props.changeSortType(pageSize);
        if(pageSize == 1){
            pageSize = 0;
        }
        Axios.get(`https://localhost:44340/api/catalog?page=1&pageSize=${pageSize}`).then(res => 
        {
            props.setCurrentPage(1);
            props.setCatalog(res.data);

        });
    }

    return (
        <div className={s.sort__panel}>
            {props.checked == 2
                ? <div id="2" onClick={onSortClick} className={`${s.btn} ${s.checked}`} > 20 cakes</div>
                : <div id="2" onClick={onSortClick} className={s.btn} > 20 cakes</div>
            }
            
            {props.checked == 5
                ? <div id="5" onClick={onSortClick} className={`${s.btn} ${s.checked}`} > 50 cakes</div>
                : <div id="5" onClick={onSortClick} className={s.btn} > 50 cakes</div>
            }
            {props.checked == 10
                ? <div id="10" onClick={onSortClick} className={`${s.btn} ${s.checked}`} > 100 cakes</div>
                : <div id="10" onClick={onSortClick} className={s.btn} > 100 cakes</div>
            }
            {props.checked == 1
                ? <div id="1" onClick={onSortClick} className={`${s.btn} ${s.checked}`} > All cakes</div>
                : <div id="1" onClick={onSortClick} className={s.btn} > All cakes</div>
            }

        </div>
    );
}

export default SortPanel;


