import React from 'react';

import styles from './';

const Input = ({ input, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
