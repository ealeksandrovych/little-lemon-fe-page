import React from 'react';
import styles from './Section.module.css';

function Section({ title, children, className = '', ...props }) {
  return (
    <section
      className={`${styles.section} ${className}`}
      aria-labelledby={title ? 'section-title' : undefined}
      {...props}
    >
      {title && (
        <h2 id="section-title" className={styles.title}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export default Section;