import React from 'react';
import styles from './Nav.module.css';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import { NavLink } from 'react-router-dom';

function Nav() {
  const handleMenuClick = (e) => {
    e.preventDefault(); 
    const specialsSection = document.getElementById('specials-section');
    if (specialsSection) {
      specialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main Navigation">
      <List className={styles.navList}>
        <ListItem>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            aria-label="Go to Home"
          >
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            aria-label="Learn more About Us"
          >
            About
          </NavLink>
        </ListItem>
        <ListItem>
          {/* Посилання для прокрутки до секції Specials */}
          <a 
            href="#specials-section" 
            onClick={handleMenuClick} 
            className={styles.menuLink} 
            aria-label="View our Menu"
          >
            Menu
          </a>
        </ListItem>
        <ListItem>
          <NavLink 
            to="/reservations" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            aria-label="Make a Reservation"
          >
            Reservations
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            aria-label="Login to your account"
          >
            Login
          </NavLink>
        </ListItem>
      </List>
    </nav>
  );
}

export default Nav;