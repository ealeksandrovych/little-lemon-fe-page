import React from 'react';
import styles from './Nav.module.css';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import { Link } from 'react-router-dom'; 

function Nav() {
  return (
    <nav className={styles.nav}>
      <List className={styles.navList}>
        <ListItem><Link to="/">Home</Link></ListItem>
        <ListItem><Link to="/about">About</Link></ListItem>
        <ListItem><Link to="/menu">Menu</Link></ListItem>
        <ListItem><Link to="/reservations">Reservations</Link></ListItem>
        <ListItem><Link to="/login">Login</Link></ListItem>
      </List>
    </nav>
  );
}

export default Nav;