import React from 'react';
import './footer.module.css';
import Contact from './contacts/contact';

function Footer() {
  return (
    <footer>
        <Contact header="DESIGNED BY" info="Yuzhyk Maryia" r=""/>
        <Contact header="PHOTOS FROM" info="www.google.com" r="https://www.google.com"/>
        <Contact header="COPYRIGHTS" info="@2020. CakeMaster. All rigths reserved" r=""/>
        <Contact header="FOLLOW US" info="Instagram" r="https://www.instagram.com"/>
    </footer>

  );
}

export default Footer;
