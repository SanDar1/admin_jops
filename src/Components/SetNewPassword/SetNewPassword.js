import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Alert from '@mui/material/Alert';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import loginImg from '../../images/login.png';

import styles from './SetNewPassword.module.css';

function SetNewPassword() {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [link, setLink] = useState("");
  const [wasClicked, setWasClicked] = useState(false);
  const [wasSended, setWasSended] = useState(false);

  const alertStyle = {
    success: {
      width: '65%',
      borderRadius: '10px',
      boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
      marginTop: '20px',
      marginLeft: '20px'
    },
    alert: {
      width: '80%',
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

  function regPass() {
    if (password !== repeatPassword) {
      setWasClicked(true);
      setTimeout(() => {
        setWasClicked(false);
      }, 1500);
    }
    else {
      setWasClicked(false);
      setWasSended(true);
      setLink("/");
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
        <p className={styles.title}>Придумайте новый пароль</p>
        <form>
          <div className={styles.formBackground}>
            <div className={styles.inputs}>
              <div className={styles.inputContainer}>
                <LockOutlinedIcon style={{ fontSize: '30px' }} className={styles.inputIcons} />
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className={styles.passwordInput}
                  type="password"
                  placeholder="Пароль"
                />
              </div>
              <Alert style={
                wasClicked ?
                  {...alertStyle.alert, ...alertStyle.triggeredAlert}
                  :
                  {...alertStyle.alert, ...alertStyle.defaultAlert}
              }
              severity="error">Пароли не совпадают!</Alert>
              <div className={styles.inputContainer}>
                <LockOutlinedIcon style={{ fontSize: '30px' }} className={styles.inputIcons} />
                <input
                  value={repeatPassword}
                  onChange={e => setRepeatPassword(e.target.value)}
                  className={styles.passwordInput}
                  type="password"
                  placeholder="Подтвердите пароль"
                />
              </div>
            </div>

            <Alert style={
              wasSended ?
                {...alertStyle.success, ...alertStyle.triggeredAlert}
                :
                {...alertStyle.success, ...alertStyle.defaultAlert}
              }
            severity="success">Пароль успешно изменён. Нажмите ещё раз для возвращения на страницу входа.</Alert>

            <div className={styles.logIntoAccountWrap}>
              <Link to={link} className={styles.logIntoAccount}><button onClick={regPass}>Подтвердить</button></Link>
            </div>
          </div>
        </form>
        <img src={loginImg} alt="img error" className={styles.loginImage} />
      </div>
  );
}

export default SetNewPassword;