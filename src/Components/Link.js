import React from 'react';

function Link({ href, children, className }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default Link;