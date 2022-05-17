import React, { useState } from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Alert from '@mui/material/Alert';
import loginImg from '../../images/login.png';

import styles from './RestorePassword.module.css';

function RestorePassword() {
  const [wasClicked, setWasClicked] = useState(false);
  const [wasSended, setWasSended] = useState(false);
  const [mail, setMail] = useState('');

  const alertStyle = {
    success: {
      width: '55%',
      borderRadius: '10px',
      boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
      marginTop: '10px',
    },
    alert: {
      width: '65%',
      borderRadius: '10px',
      boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
      marginTop: '10px',
      marginLeft: '40px',
    },
    defaultAlert: {
      display: 'none',
    },
    triggeredAlert: {
      display: 'flex'
    }
  };

  function validateEmail(email) {
    var pattern  =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return pattern.test(email);
  }

  const restorePass = () => {
    if (!validateEmail(mail)) {
      setWasClicked(true);
    }
    else {
      setWasSended(true);
      setWasClicked(false);
    };
  }

  return (
    <div style={{ minHeight: '100vh' }}>
        <p className={styles.title}>Восстановление пароля</p>
        <form>
          <div className={styles.formBackground}>
            <div className={styles.inputs}>
              <div className={styles.inputContainer}>
                <AccountCircleOutlinedIcon style={{ fontSize: '30px' }} className={styles.inputIcons} />
                <input
                  value={mail}
                  onChange={e => setMail(e.target.value)}
                  className={styles.mailInput}
                  type="email"
                  placeholder="Электронна почта"
                  disabled={wasSended}
                />
              </div>
              <Alert style={
                wasClicked ?
                  {...alertStyle.alert, ...alertStyle.triggeredAlert}
                  :
                  {...alertStyle.alert, ...alertStyle.defaultAlert}
                }
                severity="error">Почта введена неверно!</Alert>
            </div>

            <div className={styles.logIntoAccountWrap}>
              <button type="button" className={styles.logIntoAccount} onClick={restorePass}>Отправить</button>
            </div>
            <Alert style={
              wasSended ?
                {...alertStyle.success, ...alertStyle.triggeredAlert}
                :
                {...alertStyle.success, ...alertStyle.defaultAlert}
              }
            severity="success">На почту отправлена ссылка для восстановление пароля.</Alert>
          </div>
        </form>
        <img src={loginImg} className={styles.loginImage} />
      </div>
  );
}

export default RestorePassword;