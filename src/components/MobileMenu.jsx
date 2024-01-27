import React from 'react'
import style from '../assets/stylesheets/mobile-menu.module.css';
import closeButton from '../assets/img/close-btn.png';
import dashboardIcon from '../assets/img/category.png';
import metricsIcon from '../assets/img/trend.png';
import profileIcon from '../assets/img/profile.png';
import contributionIcon from '../assets/img/box.png';
import discountIcon from '../assets/img/discount.png';
import infoIcon from '../assets/img/info-circle.png';
import logo from '../assets/img/flash_logo.png';
import themeIcon from '../assets/img/theme.png';


function MobileMenu({setIsMenuOpen}) {
  return (
        <>    
          <ul className={`${style.mobile_menu} ${style.slideIn}`}>
          <img src={logo} alt='My Company' className={style.mobile_menu__logo} />
          <img src={closeButton} onClick={() => setIsMenuOpen(false)} className={style.close_button} />
            <li className={style.menu_item}>
              <a className='text-gray-400 flex items-center' href="#work">
              <img src={dashboardIcon} className={style.menu__link_icon} alt='Dashboard' /> Dashboard
              </a>
            </li>
            <li className={style.menu_item}>
              <a className='text-gray-400 flex items-center' href="#work">
              <img src={metricsIcon} alt='Trends' className={style.menu__link_icon} /> Trends
              </a>
            </li>
            <li className={style.menu_item}>
              <a className='text-gray-400 flex items-center' href="#work">
              <img src={profileIcon} alt='Profile' className={style.menu__link_icon} /> Profile
              </a>
            </li>
            <li className={style.menu_item}>
              <a className='text-gray-400 flex items-center' href="#work">
              <img src={contributionIcon} alt='Contributions' className={style.menu__link_icon} /> Contributions
              </a>
            </li>
            <li className={style.menu_item}>
              <a className='text-gray-400 flex items-center' href="#work">
              <img src={discountIcon} alt='Discounts' className={style.menu__link_icon} /> Discounts
              </a>
            </li>
            <li className={style.menu_item}>
              <a className='text-gray-400 flex items-center' href="#work">
              <img src={infoIcon} alt='Info' className={style.menu__link_icon} /> Info
              </a>
            </li>
            <li className={style.menu_item}>
              <a className='text-gray-400 flex items-center'>
              <img src={themeIcon} alt='Info' className={`${style.menu__theme_icon}`} /> 
              </a>
            </li>
          </ul>
        </>
      )}

export default MobileMenu