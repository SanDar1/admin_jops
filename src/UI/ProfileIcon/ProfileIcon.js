import React from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import styles from './ProfileIcon.module.css';

function ProfileIcon({user, name}) {
  return (
    <span className={styles.profileIcon}>
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

export default ProfileIcon;