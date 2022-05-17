import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import styles from './RegisterAdditionalData.module.css';
import RegImage from '../regImage/regImage';
import CustomRegInput from '../../../UI/CustomInputs/CustomRegInput';

function RegisterAdditionalData() {
  const [personData, setPersonData] = useState({});
  const [link, setLink] = useState("");

  function finishReg() {
    const person = JSON.parse(localStorage.getItem("person"));

    const newData = {
      gender: personData.gender,
      birthDate: personData.birthDate,
      city: personData.city,
      phoneNumber: personData.phoneNumber,
    }

    Object.assign(person, newData);

    fetch("http://192.168.200.55:5000/api/registration", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: person.secondName,
        name: person.name,
        patronymic: person.thirdName,
        number: person.phoneNumber,
        town: person.city,
        dateOfBirth: Date.parse(person.birthDate),
        sex: person.gender,
        email: person.email,
        password: person.password
      })
    })
      .then(res => res.json())
      .then(result => console.log(result));

    // localStorage.setItem('person', JSON.stringify(person));
  }

  useEffect(() => {
    if (personData.gender !== undefined && personData.birthDate !== undefined
      && personData.city !== undefined && personData.phoneNumber !== undefined) {
        setLink("/regMailVerify");
    }
    else {
      setLink("");
    }
  }, [personData.gender, personData.birthDate, personData.city, personData.phoneNumber]);



  const radioBtns = [
    {
      value: "male", label: "Мужской", onChange: e => setPersonData(prev => {return {...prev, gender: e.target.value}})
    },
    {
      value: "female", label: "Женский", onChange: e => setPersonData(prev => {return {...prev, gender: e.target.value}})
    }
  ]

  const regAdditional = [
    {
      value: personData.birthDate, type: "date", placeholder: "Дата рождения",
      icon: <CalendarTodayOutlinedIcon className={styles.inputIcons} />,
      onChange: e => setPersonData(prev => {return {...prev, birthDate: e.target.value}})
    },
    {
      value: personData.city, type: "text", placeholder: "Город",
      icon: <CorporateFareOutlinedIcon className={styles.inputIcons} />,
      onChange: e => setPersonData(prev => {return {...prev, city: e.target.value}})
    },
    {
      value: personData.phoneNumber, type: "text", placeholder: "Номер телефона",
      icon: <LocalPhoneOutlinedIcon className={styles.inputIcons} />,
      onChange: e => setPersonData(prev => {return {...prev, phoneNumber: e.target.value}})
    }
  ];



  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.regAdditionalDataContainer}>
        <p className={styles.greetings}>Последний этап</p>
        <form className={styles.formBackground}>
          <div className={styles.radioBtns}>
            {
              radioBtns.map(elem => (
                <div className={styles.radioWrapper} key={elem.label}>
                  <label>
                    <input
                      type="radio"
                      name="sex"
                      value={elem.value}
                      onChange={elem.onChange}
                    />
                    <span className={styles.fake}></span>
                    <span className={styles.text}>&nbsp; {elem.label}</span>
                  </label>
                </div>
              ))
            }
          </div>
          <p className={styles.stage}>3/4</p>
          <div className={styles.inputs}>
            {
              regAdditional.map(elem => (
                <div className={styles.inputContainer} key={elem.placeholder}>
                  {elem.icon}
                  <CustomRegInput
                    margin="0 0 5px 0" value={elem.value}
                    func={elem.onChange}
                    type={elem.type} placeholder={elem.placeholder}
                  />
                </div>
              ))
            }
          </div>
          
          <div className={styles.nextStageWrap}>
            <Link to={link} className={styles.nextStageLink}>
              <button onClick={finishReg}>Далее</button>
            </Link>
          </div>
          <RegImage />
        </form>
      </div>
    </div>
  );
}

export default RegisterAdditionalData;