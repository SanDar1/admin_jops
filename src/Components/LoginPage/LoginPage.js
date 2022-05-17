import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Alert from '@mui/material/Alert';

import styles from "./LoginPage.module.css";
import loginImg from '../../images/login.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wasClicked, setWasClicked] = useState(false);
  const [checkedData, setCheckedData] = useState(false);

  const alertStyle = {
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


  function validateEmail(email) {
    var pattern  =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return pattern.test(email);
  }


  function logIn() {
    if (!validateEmail(email)) {
      setWasClicked(true);
      setCheckedData(false);
      throw new Error("Email error");
    }

    fetch("http://192.168.200.55:5000/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => {
        if (res.ok) return res.json();
        else {
          setWasClicked(false);
          setCheckedData(true);
          throw new Error("Couldn't login");
        }
      })
      .then(result => {
        localStorage.setItem('access', JSON.stringify(result.accessToken));
        localStorage.setItem('personID', JSON.stringify(result.id));
        localStorage.setItem('personEmail', JSON.stringify(email));
        
        window.location.href = "/profile/aboutMe";
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <p className={styles.greetings}>Добро пожаловать в ИПС НГТУ!</p>
      <p className={styles.title}>Войдите в аккаунт</p>
      <div className={styles.formBackground}>
        <div className={styles.inputs}>
          <div className={styles.inputContainer}>
            <AccountCircleOutlinedIcon style={{ fontSize: '30px' }} className={styles.inputIcons} />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={styles.mailInput}
              type="email"
              placeholder="Электронна почта"
            />
          </div>
          <Alert style={
              wasClicked ?
                {...alertStyle.alert, ...alertStyle.triggeredAlert}
                :
                {...alertStyle.alert, ...alertStyle.defaultAlert}
            }
            severity="error">Почта введена неверно!</Alert>
            <Alert style={
              checkedData ?
                {...alertStyle.alert, ...alertStyle.triggeredAlert}
                :
                {...alertStyle.alert, ...alertStyle.defaultAlert}
            }
            severity="info">Проверьте правильность введённых данных!</Alert>
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
          <div className={styles.forgotPassword}>
            <Link to="/restorePass" style={{textDecoration: "none"}}><p>Не помню пароль</p></Link>
          </div>
        </div>

        <div className={styles.logIntoAccountWrap}>
          <div className={styles.logIntoAccount}><button onClick={logIn}>Войти</button></div>
        </div>
        <div className={styles.notRegisteredWrap}>
          <Link to="/regName" className={styles.notRegistered}><p>Ещё нет профиля? Зарегистрируйтесь!</p></Link>
        </div>
      </div>
      <img src={loginImg} alt="img error" className={styles.loginImage} />
    </div>
  );
}

export default LoginPage;