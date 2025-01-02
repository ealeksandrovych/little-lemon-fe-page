import React from 'react';
import styles from './ListItem.module.css';

function ListItem({ children, className }) {
  return <li className={`${styles.listItem} ${className}`}>{children}</li>;
}

export default ListItem;