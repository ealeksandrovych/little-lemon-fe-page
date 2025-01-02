import React from 'react';
import styles from './Section.module.css';

function Section({ title, children, className }) {
  return (
    <section className={`${styles.section} ${className}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;