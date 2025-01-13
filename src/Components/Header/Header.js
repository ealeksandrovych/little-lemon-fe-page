import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';
import logo from '../../assets/Logo1.svg';

function Header() {
  return (
    <header className={styles.header} role="banner">
      <a href="/" aria-label="Return to Little Lemon homepage">
        <img src={logo} alt="Little Lemon Logo" className={styles.logo} />
      </a>
      <Nav aria-label="Main navigation" />
    </header>
  );
}

export default Header;