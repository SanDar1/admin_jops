import React, { useState, useRef, useEffect } from 'react';

import Window from './Window/Window';

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import { styles } from './styles';
import moduleStyles from './Chat.module.css';

function ChatButton(props) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref])

  return (
    <div
      ref={ref}
      style={props.style}
      onClick={() => setVisible(true)}
    >
      <Window visible={visible} />

      <div
        className={moduleStyles['transition-3']}
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? '1' : '0'}
        }}
      >
        Открыть чат
      </div>

      <div
        className={moduleStyles['transition-3']}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? '2px solid #2972a0' : '2px solid #000'}
        }}
      >
        <ChatOutlinedIcon sx={{ fontSize: '45px' }} />
      </div>
    </div>
  );
}

export default ChatButton;