import React from 'react';

function Section({ title, children, className }) {
  return (
    <section className={className}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;