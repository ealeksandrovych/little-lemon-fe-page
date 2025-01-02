import React from 'react';
import styles from './List.module.css';

function List({ children, className }) {
  return <ul className={`${styles.list} ${className}`}>{children}</ul>;
}

export default List;