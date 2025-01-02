import React from 'react';
import List from './List';
import ListItem from './ListItem';
import Link from './Link';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <List className={styles.navList}>
        <ListItem><Link href="#home">Home</Link></ListItem>
        <ListItem><Link href="#about">About</Link></ListItem>
        <ListItem><Link href="#menu">Menu</Link></ListItem>
        <ListItem><Link href="#reservations">Reservations</Link></ListItem>
        <ListItem><Link href="#login">Login</Link></ListItem>
      </List>
    </nav>
  );
}

export default Nav;