import React from 'react';
import styles from './Link.module.css';

function Link({ href, children, className }) {
  return (
    <a href={href} className={`${styles.link} ${className}`}>
      {children}
    </a>
  );
}

export default Link;