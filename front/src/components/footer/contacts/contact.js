import React from 'react';
import s from  './contact.module.css';

function Contact(props) {
  return (
        <div class={s.contact}>
            <p className={s.header}>{props.header}</p>
            <p className={s.info}>{props.info}</p>
        </div>
  );
}

export default Contact;
