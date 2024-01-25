import { Fragment, useEffect, useState } from 'react';
import { FiAlignJustify, FiXCircle } from "react-icons/fi";
import style from '../assets/stylesheets/navbar.module.css';
import notification from '../assets/img/notifications.png';
import closeButton from '../assets/img/closeIcon.png';
import profileImage from '../assets/img/dany.jpg';
import MobileMenu from './MobileMenu';

const date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

const currentDate = new Intl.DateTimeFormat('en-US', options).format(date);
 
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };

  useEffect(() => {
    const handleBodyClick = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.addEventListener('click', handleBodyClick);
    } else {
      document.body.removeEventListener('click', handleBodyClick);
    }

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  return (
    <>
      
      <nav className={style.navbar}>
     
        
        <FiAlignJustify
        className={style.hamburger}
        onClick={handleHamburgerClick} />

        <input type='text' placeholder='Search...' className={style.navbar__search} />
        <img src={notification} alt='Notifications' />
        <div className={style.navbar__profile}>
          <img src={profileImage} alt="Profile icon" className={style.navbar__profile_icon} />
          
        </div>
      </nav>
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  )
}
 
export default Navbar
