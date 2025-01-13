import React from 'react';
import styles from './ListItem.module.css';

function ListItem({ children, className = '', ...props }) {
  return (
    <li className={`${styles.listItem} ${className}`} {...props}>
      {children}
    </li>
  );
}

export default ListItem;