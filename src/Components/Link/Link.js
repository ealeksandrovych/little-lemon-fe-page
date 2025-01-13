import React from 'react';
import styles from './Link.module.css';

function Link({ href, children, className, target, rel, ariaLabel, ...props }) {
  return (
    <a
      href={href}
      className={`${styles.link} ${className}`}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;