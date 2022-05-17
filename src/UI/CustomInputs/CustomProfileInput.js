import React from 'react';

import styles from './CustomInput.module.css';

function CustomProfileInput(props, {margin}) {
  return (
    <input
      // value={value}
      // onChange={onChangeFunc}
      {...props}
      // type={type}
      // placeholder={placeholder}
      className={styles.customProfileInputClass}
      style={{margin: margin}}
    />
  );
}

export default CustomProfileInput;