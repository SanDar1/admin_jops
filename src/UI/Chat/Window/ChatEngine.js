import React, { useState, useEffect } from 'react';

import moduleStyles from '../Chat.module.css';
import { styles } from '../styles';

function ChatEngine(props) {
  return (
    <div
      className={moduleStyles['transition-3']}
      style={{
        // ...styles.supportWindow,
        ...{
          height: props.visible ? '100%' : '0%',
          zIndex: props.visible ? '100' : '0',
          width: '100%',
        }
      }}
    >
    </div>
  );
}

export default ChatEngine;