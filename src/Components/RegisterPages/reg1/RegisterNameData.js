import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import styles from './RegisterNameData.module.css';
import RegImage from '../regImage/regImage';
import CustomRegInput from '../../../UI/CustomInputs/CustomRegInput';

function RegisterPage1() {
  const [personData, setPersonData] = useState({});
  const [link, setLink] = useState("");


  function validateEmail(email) {
    var pattern  =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return pattern.test(email);
  }


  useEffect(() => {
    if (personData.name !== undefined && personData.secondName !== undefined && personData.thirdName !== undefined && validateEmail(personData.email)) {
      setLink("/regPassword");
    }
    else {
      setLink("");
    }
  }, [personData.secondName, personData.name, personData.thirdName, personData.email]);

  function regName() {
    const person = {
      secondName: personData.secondName,
      name: personData.name,
      thirdName: personData.thirdName,
      email: personData.email
    };

    localStorage.setItem('person', JSON.stringify(person));
  }



  const nameReg = [
    {
      value: personData.secondName, type: "text", placeholder: "Фамилия",
      icon: <AccountCircleOutlinedIcon className={styles.inputIcons} />,
      onChange: e => setPersonData(prev => {return {...prev, secondName: e.target.value}})
    },
    {
      value: personData.name, type: "text", placeholder: "Имя",
      icon: <AccountCircleOutlinedIcon className={styles.inputIcons} />,
      onChange: e => setPersonData(prev => {return {...prev, name: e.target.value}})
    },
    {
      value: personData.thirdName, type: "text", placeholder: "Отчество",
      icon: <AccountCircleOutlinedIcon className={styles.inputIcons} />,
      onChange: e => setPersonData(prev => {return {...prev, thirdName: e.target.value}})
    },
    {
      value: personData.email, type: "email", placeholder: "Электронная почта",
      icon: <AccountCircleOutlinedIcon className={styles.inputIcons} />,
      onChange: e => setPersonData(prev => {return {...prev, email: e.target.value}})
    }
  ];


  
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.regNameDataContainer}>
        <p className={styles.greetings}>Создайте свой профиль</p>
        <form className={styles.formBackground}>
          <p className={styles.stage}>1/4</p>
          <div className={styles.inputs}>
            {
              nameReg.map(elem => (
                <div className={styles.inputContainer} key={elem.placeholder}>
                  {elem.icon}
                  <CustomRegInput
                    margin="5px 0 0 0" value={elem.value}
                    func={elem.onChange}
                    type={elem.type} placeholder={elem.placeholder}
                  />
                </div>
              ))
            }
          </div>
          <p className={styles.agreement}>Нажимая на кнопку, я соглашаюсь на обработку персональных данных</p>
          <div className={styles.nextStageWrap}>
            <Link to={link} className={styles.nextStageLink}><button onClick={regName}>Далее</button></Link>
          </div>
          <div className={styles.hasAccountWrap}>
            <Link to="/" className={styles.hasAccount}><p>У вас уже есть профиль? Войтите</p></Link>
          </div>
          <RegImage />
        </form>
      </div>
    </div>
  );
}

export default RegisterPage1;