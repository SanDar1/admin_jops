import React from 'react';

import { styles } from '../styles';
import moduleStyles from '../Chat.module.css';

function Window(props) {
  return (
    <div
      className={moduleStyles['transition-5']}
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? '1' : '0'}
      }}
    >

    </div>
  );
}

export default Window;