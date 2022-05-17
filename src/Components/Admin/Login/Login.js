import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import styles from "./Login.module.css";
import loginImg from '../../../images/login.png';

function AdminLogin() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [link, setLink] = useState("");

    useEffect(() => {
      if (mail === "admin" & password === "admin") {
        setLink("requests");
      }
    }, [mail, password]);

    return (
      <div style={{ minHeight: '100vh' }}>
        <p className={styles.title}>Вход администратора</p>
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
                />
              </div>
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
            </div>

            <div className={styles.logIntoAccountWrap}>
              <Link to={link} className={styles.logIntoAccount}><button>Войти</button></Link>
            </div>
          </div>
        </form>
        <img src={loginImg} className={styles.loginImage} />
      </div>
    );
}

export default AdminLogin;