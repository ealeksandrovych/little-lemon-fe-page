import React from 'react';
import List from './List';
import ListItem from './ListItem';
import Link from './Link';

function Nav() {
  return (
    <nav>
      <List className="nav-list">
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