import React from 'react';
import s from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import {GetRequestHandler} from './../../../helperFunctions/requestHandler';

class Navbar extends React.Component {

    componentDidMount(){
        let roleResolveCallback = res => {
            this.props.setRole(res.data);
        };
        GetRequestHandler("https://localhost:44340/role", roleResolveCallback);
        let cartResolveCallback = res => {
            this.props.setCart(res.data);
        }
        GetRequestHandler("https://localhost:44340/api/cart", cartResolveCallback);
    }

    getNavItems(){
        let navItems = [];
        let tempItem = <NavLink className={s.item} activeClassName={s.active} exact to="/">All cakes</NavLink>;
        navItems.push(tempItem);
        switch(this.props.role){   
            case "user":
                let cartText = "Cart";
                if(this.props.cartCount > 0){
                    cartText += ` (${this.props.cartCount})`;
                }
                tempItem = <NavLink className={s.item} activeClassName={s.active} to="/cart">{cartText} </NavLink>
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
        let resolveCallback = () => this.props.setRole("");
        let rejectCallback = () => alert("Sorry, we you can't signout");
        GetRequestHandler("https://localhost:44340/logout", resolveCallback, rejectCallback);   
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
