import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import styles from './AlertContainer.module.css';

function AlertContainer() {
  return (
    <div className={styles.alertContainer}>
      <Alert severity="info" className={styles.alert}>
        <AlertTitle>Напоминание</AlertTitle>
        Не забудьте вносить реальные данные!
      </Alert>
    </div>
  );
}

export default AlertContainer;