import React from 'react';
import './footer.module.css';
import Contact from './contacts/contact';

function Footer() {
  return (
    <footer>
        <Contact header="DESIGNED BY" info="Yuzhyk Maryia"/>
        <Contact header="PHOTOS FROM" info="www.google.com"/>
        <Contact header="COPYRIGHTS" info="@2020. CakeMaster. All rigths reserved"/>
        <Contact header="FOLLOW US" info="Inst"/>
    </footer>

  );
}

export default Footer;
