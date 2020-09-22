import React from 'react';
import s from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

class Navbar extends React.Component {

    componentDidMount(){
        Axios.get("https://localhost:44340/role").then(res => {
            this.props.setRole(res.data);
        })
    }

    getNavItems(){
        let navItems = [];
        let tempItem = <NavLink className={s.item} activeClassName={s.active} exact to="/">All cakes</NavLink>;
        navItems.push(tempItem);
        switch(this.props.role){   
            case "user":
                tempItem = <NavLink className={s.item} activeClassName={s.active} to="/cart">Cart</NavLink>
                navItems.push(tempItem);
                tempItem = <NavLink className={s.item} activeClassName={s.active} to="/acc">My account</NavLink>
                navItems.push(tempItem);
                tempItem = <NavLink className={s.item} onClick={this.onSigout.bind(this)} activeClassName={s.active} to="/signin">Sign out</NavLink>
                navItems.push(tempItem);
                break;
            case "admin":
                tempItem = <NavLink className={s.item} activeClassName={s.active} to="/admin">Edit catalog</NavLink>
                navItems.push(tempItem);
                tempItem = <NavLink className={s.item} onClick={this.onSigout.bind(this)} activeClassName={s.active} to="/signin">Sign out</NavLink>
                navItems.push(tempItem);
                break;
            default:
                tempItem = <NavLink className={s.item} activeClassName={s.active} to="/signin">Sign in</NavLink>
                navItems.push(tempItem);
                break;
        }
        return navItems;
    }

    onSigout(){
        Axios.get("https://localhost:44340/logout");
        this.props.setRole("");
    }

    
    

    render(){
        return (
            <nav>
                {this.getNavItems()}
            </nav>
        );
    }
}

export default Navbar;
