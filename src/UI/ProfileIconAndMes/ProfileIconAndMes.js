import React, { useState } from 'react';

import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import styles from './ProfileIconAndMes.module.css';

function ProfileIconAndMes({user, name}) {
  const [messagesCount, setMessagesCount] = useState(1);

  return (
    <span className={styles.profileIconAndMes}>
      {
        user ?
        <div className={styles.bellIcon}>
          <Badge color="primary" badgeContent={messagesCount} className={styles.badge}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </div>
        :
        <div className={styles.bellIcon}>
          <Badge color="warning" badgeContent={messagesCount} className={styles.badge}>
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </div>
      }
      <Divider orientation="vertical" className={styles.divider} />
      <div className={styles.personName}>{name}</div>
      {
        user ?
          <AccountCircleOutlinedIcon fontSize="large" sx={{ color: '#2972a0' }}/>
        :
          <AccountCircleOutlinedIcon fontSize="large" sx={{ color: '#70caf2' }}/>
      }
    </span>
  );
}

export default ProfileIconAndMes;