import React from 'react';
import s from './pageNav.module.css'
import CurrentPage from './currentPage/currentPage';
import Axios from 'axios';

class PageNav extends React.Component {

    setCatalog(currPage){
        this.props.setCurrentPage(currPage);
        Axios.get(`https://localhost:44340/api/catalog?page=${currPage}&pageSize=${this.props.pageSize}`).then(res => 
        {
            this.props.setCatalog(res.data);
        });
    }

    toStart(e){
        e.preventDefault();
        this.setCatalog(1);
        
    }

    toPrev(e){
        e.preventDefault();
        let prev = this.props.currentPage - 1;
        if(prev > 0){
            this.setCatalog(prev);
        }
    }

    toNext(e){
        e.preventDefault();
        let next = parseInt(this.props.currentPage) + 1;
        if(next <= this.props.pageCount){
            
            this.setCatalog(next);
        }
    }

    toEnd(e){
        e.preventDefault();
        this.setCatalog(this.props.pageCount);
    }
   
    render(){
        return (
            <div className={s.pages}>
                <button onClick={this.toStart.bind(this)} className={`${s.first} ${s.btn}`}>start</button>
                <button onClick={this.toPrev.bind(this)} className={`${s.prev} ${s.btn}`}>prev</button>
                <CurrentPage current={this.props.currentPage} max={this.props.pageCount} setCatalog={this.setCatalog.bind(this)}/>
                <button onClick={this.toNext.bind(this)} className={`${s.next} ${s.btn}`}>next</button>
                <button onClick={this.toEnd.bind(this)} className={`${s.last} ${s.btn}`}>end</button>
    
            </div>
        );
    }
    
}

export default PageNav;


