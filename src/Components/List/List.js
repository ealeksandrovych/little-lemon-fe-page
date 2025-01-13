import React from 'react';
import styles from './List.module.css';

function List({ children, className = '', role, ...props }) {
  return (
    <ul className={`${styles.list} ${className}`} role={role} {...props}>
      {children}
    </ul>
  );
}

export default List;