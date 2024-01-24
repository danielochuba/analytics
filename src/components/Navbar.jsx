import { Fragment } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import style from '../assets/stylesheets/navbar.module.css';
import notification from '../assets/img/notifications.png';
import profileImage from '../assets/img/dany.jpg';

const date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

const currentDate = new Intl.DateTimeFormat('en-US', options).format(date);
 
function Navbar() {
  return (
    <nav className={style.navbar}>
      
      <FiAlignJustify
      className={style.hamburger} />

      <input type='text' placeholder='Search...' className={style.navbar__search} />
      <img src={notification} alt='Notifications' />
      <div className={style.navbar__profile}>
        <img src={profileImage} alt="Profile icon" className={style.navbar__profile_icon} />
        
      </div>
    </nav>
  )
}
 
export default Navbar
