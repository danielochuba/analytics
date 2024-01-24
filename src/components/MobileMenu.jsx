import React from 'react'
import style from '../assets/stylesheets/navbar.module.css';
import closeButton from '../assets/img/close-btn.png';

function MobileMenu({setIsMenuOpen}) {
  return (
        <div className={style.menu_container}> 
          
          <ul className={style.mobile_menu}>
          <img src={closeButton} onClick={() => setIsMenuOpen(false)} className={style.close_button} />
            <li>
              <a className={style.menu_item} href="#work">
                Portfolio
              </a>
            </li>
            <li>
              <a className={style.menu_item} href="#about">
                About
              </a>
            </li>
            <li>
              <a className={style.menu_item} href="#contact">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      )}

export default MobileMenu