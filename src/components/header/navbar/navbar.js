import React from 'react';
import s from './navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    let navItems = [];
    let tempItem = <NavLink className={s.item} activeClassName={s.active} exact to="/">All cakes</NavLink>;
    navItems.push(tempItem);
    switch(props.role){   
        case "user":
            tempItem = <NavLink className={s.item} activeClassName={s.active} to="/cart">Cart</NavLink>
            navItems.push(tempItem);
            tempItem = <NavLink className={s.item} activeClassName={s.active} to="/acc">My account</NavLink>
            navItems.push(tempItem);
            tempItem = <NavLink className={s.item} activeClassName={s.active} to="/signin">Sign out</NavLink>
            navItems.push(tempItem);
            break;
        case "admin":
            tempItem = <NavLink className={s.item} activeClassName={s.active} to="/admin">Edit catalog</NavLink>
            navItems.push(tempItem);
            tempItem = <NavLink className={s.item} activeClassName={s.active} to="/signin">Sign out</NavLink>
            navItems.push(tempItem);
            break;
        default:
            tempItem = <NavLink className={s.item} activeClassName={s.active} to="/signin">Sign in</NavLink>
            navItems.push(tempItem);
            break;
    }
    return (
        <nav>
            {navItems}
        </nav>
    );
}

export default Navbar;
