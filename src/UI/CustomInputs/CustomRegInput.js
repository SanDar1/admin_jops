import React from 'react';

import styles from './CustomInput.module.css';

function CustomRegInput({value, func, type, placeholder, margin}) {
  return (
    <input
      value={value}
      onChange={func}
      type={type}
      placeholder={placeholder}
      className={styles.customRegInputClass}
      style={{margin: margin}}
    />
  );
}

export default CustomRegInput;