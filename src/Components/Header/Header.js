import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';
import logo from '../../assets/Logo1.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Little Lemon Logo" className={styles.logo} />
      <Nav />
    </header>
  );
}

export default Header;