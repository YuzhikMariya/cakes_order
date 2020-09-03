import React from 'react';
import s from './sortPanel.module.css'
import SortButton from './sortButton/sortButton';

function SortPanel(props) {
    return (
        <div className={s.sort__panel}>
            <SortButton changeSortType={props.changeSortType} isChecked={props.checked} id="sortBy20" count="20"/>
            <SortButton changeSortType={props.changeSortType} isChecked={props.checked} id="sortBy50" count="50"/>
            <SortButton changeSortType={props.changeSortType} isChecked={props.checked} id="sortBy100" count="100"/>
            <SortButton changeSortType={props.changeSortType} isChecked={props.checked} id="sortByAll" count="All"/>
        </div>
    );
}

export default SortPanel;


