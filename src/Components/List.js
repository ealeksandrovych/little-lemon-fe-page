import React from 'react';

function List({ children, className }) {
  return <ul className={className}>{children}</ul>;
}

export default List;