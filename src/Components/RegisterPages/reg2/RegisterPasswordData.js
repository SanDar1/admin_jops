import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Alert from '@mui/material/Alert';

import styles from './RegisterPasswordData.module.css';
import RegImage from '../regImage/regImage';
import CustomRegInput from '../../../UI/CustomInputs/CustomRegInput';

function RegisterPasswordData() {
  const [personData, setPersonData] = useState({});
  const [link, setLink] = useState("");
  const [wasClicked, setWasClicked] = useState(false);

  const alertStyle = {
    alert: {
      width: '70%',
      borderRadius: '10px',
      boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
      marginTop: '5px',
      marginLeft: '40px',
      marginBottom: '20px'
    },
    defaultAlert: {
      display: 'none',
    },
    triggeredAlert: {
      display: 'flex'
    }
  };

  useEffect(() => {
    if (personData.password !== personData.repeatPassword) {
      setLink("");
    }
    else if ((personData.password === personData.repeatPassword) &&
    (personData.password !== "" || personData.repeatPassword !== "")) {
      setLink("/regAdditional");
    }
  }, [personData.password, personData.repeatPassword]);

  function regPass() {
    setWasClicked(true);

    const person = JSON.parse(localStorage.getItem("person"));
    localStorage.setItem("person", JSON.stringify({...person, password: personData.password}));
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.regPasswordContainer}>
        <p className={styles.greetings}>Создайте свой профиль</p>
        <form className={styles.formBackground}>
          <p className={styles.stage}>2/4</p>
          <div className={styles.inputs}>
            <div className={styles.inputContainer}>
              <LockOutlinedIcon className={styles.inputIcons} />
              <CustomRegInput
                margin="0 0 50px 0" value={personData.password}
                func={e => setPersonData(prev => {return {...prev, password: e.target.value}})}
                type="password" placeholder="Пароль"
              />
            </div>
            <Alert style={
              wasClicked ?
                {...alertStyle.alert, ...alertStyle.triggeredAlert}
                :
                {...alertStyle.alert, ...alertStyle.defaultAlert}
            }
            severity="error">Пароли не совпадают!</Alert>
            <p className={styles.passRequirement}>Придумайте пароль, в котором содержится от 8 символов</p>
            <div className={styles.inputContainer}>
              <LockOutlinedIcon className={styles.inputIcons} />
              <CustomRegInput
                margin="0 0 50px 0" value={personData.repeatPassword}
                func={e => setPersonData(prev => {return {...prev, repeatPassword: e.target.value}})}
                type="password" placeholder="Повторите пароль"
              />
            </div>
          </div>
          
          <div className={styles.nextStageWrap}>
            <Link to={link} className={styles.nextStageLink}>
              <button onClick={regPass}>Далее</button>
            </Link>
          </div>
          <RegImage />
        </form>
      </div>
    </div>
  );
}

export default RegisterPasswordData;