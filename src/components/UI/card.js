import React from 'react';
import './card.css';

export const card = ({ children, clasName }) => {
  const madeClass = 'card ' + clasName;
  return <div className={madeClass}>{children}</div>;
};

export default card;
