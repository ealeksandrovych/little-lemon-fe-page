import React from 'react';
import Nav from './Nav';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src="path-to-logo.png" alt="Little Lemon Logo" className={styles.logo} />
      <Nav />
    </header>
  );
}

export default Header;