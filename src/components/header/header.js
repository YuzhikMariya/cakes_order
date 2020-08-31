import React from 'react';
import './header.css';
import Logo from './logo/logo';
import Navbar from './navbar/navbar';

function Header() {
    const menu = [
        {
          link: '',
          title: 'All cakes'
        },
        {
          link: '',
          title: 'Contacts'
        },
        {
          link: '',
          title: 'Posts'
        }
      ];
    return (
        <header>
            <Logo />
            <Navbar navItems={menu}/>
        </header>
    );
}

export default Header;
