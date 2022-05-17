import React from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import PersonName from './PersonName/PersonName';
import WorkData from './WorkData/WorkData';
import LearnAs from './LearnAs/LearnAs';
import AlertContainer from './AlertContainer/AlertContainer';
import ProgressBar from './ProgressBar/ProgressBar';
import EducationData from './EducationData/EducationData';
import DocumentData from './DocumentData/DocumentData';

import styles from './PersonData.module.css';

function PersonData({ personData, setPersonData, setUserName }) {

  const saveNameData = () => {
    fetch("http://192.168.200.55:5000/api/profile/save_main_info", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
      },
      body: JSON.stringify({
        id: personData.id,
        email: JSON.parse(localStorage.getItem('personEmail')),
        firstname: personData.secondName,
        name: personData.name,
        patronymic: personData.thirdName,
        dateOfBirth: Date.now(),
        sex: personData.gender
      })
    })
    .then(res => res.json())
    .then(res => { console.log(res) })

    setUserName(personData.secondName + " " + personData.name);
  }

  const saveWorkData = () => {
    fetch("http://192.168.200.55:5000/api/profile/save_second_info", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
      },
      body: JSON.stringify({
        id: personData.id,
        number: personData.phoneNumber,
        citizenship: personData.citizenship,
        placeOfWork: personData.work,
        post: personData.job,
      })
    })
    .then(res => res.json())
    .then(res => { console.log(res) })
  }

  const saveLearnAsData = () => {
    fetch("http://192.168.200.55:5000/api/profile/save_education_form", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
      },
      body: JSON.stringify({
        id: personData.id,
        typeOfEducation: personData.learnAs
      })
    })
    .then(res => res.json())
    .then(res => { console.log(res) })
  }

  const saveEducationData = () => {
    fetch("http://192.168.200.55:5000/api/profile/save_education", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
      },
      body: JSON.stringify({
        id: personData.id,
        educationLevel: personData.education,
        lastNameDiplom: personData.educationSecondName,
        diplomSeries: personData.educationSeries,
        diplomNumber: personData.educationNumber,
      })
    })
    .then(res => res.json())
    .then(res => { console.log(res) })
  }

  const saveDocumentsData = () => {
    fetch("http://192.168.200.55:5000/api/profile/save_documents", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
      },
      body: JSON.stringify({
        id: personData.id,
        snils: personData.snils,
        passportSeries: personData.passportSeries,
        passportNumber: personData.passportNumber,
        given: personData.passportGiven,
        address: personData.personAddress
      })
    })
    .then(res => res.json())
    .then(res => { console.log(res) })
  }



  const nameInputs = [
    {
      value: personData.secondName, label: "Фамилия", required: true,
      onChange: e => setPersonData(prev => {return {...prev, secondName: e.target.value}})
    },
    {
      value: personData.name, label: "Имя", required: true,
      onChange: e => setPersonData(prev => {return {...prev, name: e.target.value}})
    },
    {
      value: personData.thirdName, label: "Отчество", required: false,
      onChange: e => setPersonData(prev => {return {...prev, thirdName: e.target.value}})
    },
    {
      value: personData.gender, required: false, disabled: true, label: "Пол",
    },
    {
      value: personData.birthDate, required: false, disabled: true, label: "Дата рождения"
    }
  ];

  const workInputs = [
    {
      value: personData.phoneNumber, label: "Номер телефона", required: true,
      onChange: e => setPersonData(prev => {return {...prev, phoneNumber: e.target.value}})
    },
    {
      value: personData.citizenship, label: "Гражданство", required: true,
      onChange: e => setPersonData(prev => {return {...prev, citizenship: e.target.value}})
    },
    {
      value: personData.work, label: "Место работы", required: true,
      onChange: e => setPersonData(prev => {return {...prev, work: e.target.value}})
    },
    {
      value: personData.job, label: "Должность", required: true,
      onChange: e => setPersonData(prev => {return {...prev, job: e.target.value}})
    },
  ];


  const learnInputs = {
    component:
      <TextField
        select
        required
        label="Обучаюсь как"
        size="small"
        sx={{ width: "90%", margin: "30px 0 0 5%" }}
        value={personData.learnAs}
        onChange={e => setPersonData(prev => {return {...prev, learnAs: e.target.value}})}
      >
        {
          [
            {value: "free", label: "Бесплатно"},
            {value: "physical", label: "Физ. лицо"},
            {value: "organisation", label: "От организации"}
          ].map(option => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))
        }
      </TextField>
  }


  const educationInputs = [
    {
      component:
        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'center'}}
          key="Уровень образования"
        >
          <TextField
            select
            required
            label="Уровень образования"
            value={personData.education}
            size="small"
            sx={{ width: "80%" }}
            onChange={e => setPersonData(prev => {return {...prev, education: e.target.value}})}
          >
            {
              [
                {value: "higher", label: "Высшее"},
                {value: "specSecondary", label: "Среднее специальное"}
              ].map(option => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))
            }
          </TextField>
        </Grid>
    },
    {
      value: personData.educationSecondName, label: "Фамилия в дипломе о ВО/СПО", required: true,
      onChange: e => setPersonData(prev => {return {...prev, educationSecondName: e.target.value}})
    },
    {
      value: personData.educationSeries, label: "Серия документа о ВО/СПО", required: true,
      onChange: e => setPersonData(prev => {return {...prev, educationSeries: e.target.value}})
    },
    {
      value: personData.educationNumber, label: "Номер документа о ВО/СПО", required: true,
      onChange: e => setPersonData(prev => {return {...prev, educationNumber: e.target.value}})
    }
  ];

  const documentInputs = [
    {
      value: personData.snils, label: "СНИЛС", required: true, xs: 12,
      onChange: e => setPersonData(prev => {return {...prev, snils: e.target.value}})
    },
    {
      value: personData.passportSeries, label: "Серия паспорта", required: true, xs: 5,
      onChange: e => setPersonData(prev => {return {...prev, passportSeries: e.target.value}}),
      sx: { marginLeft: "20px", width: "100%" }
    },
    {
      value: personData.passportNumber, label: "Номер паспорта", required: true, xs: 6,
      onChange: e => setPersonData(prev => {return {...prev, passportNumber: e.target.value}}),
      sx: { marginLeft: "10px", width: "100%" }
    },
    {
      value: personData.passportGiven, label: "Пасспорт выдан", required: true, multiline: true,
      onChange: e => setPersonData(prev => {return {...prev, passportGiven: e.target.value}}),
      minRows: 2, maxRows: 3, sx: { width: "80%" }, xs: 12
    },
    {
      value: personData.personAddress, label: "Адрес", required: true, multiline: true,
      onChange: e => setPersonData(prev => {return {...prev, personAddress: e.target.value}}),
      minRows: 1, maxRows: 2, sx: { width: "80%" }, xs: 12
    },
  ];



  return (
    <div className={styles.personData}>
      <div className={styles.titleBlock}>
        <span>Мой профиль</span>
        <p>Здесь вы можете посмотреть и отредактировать информацию о вас.</p>
      </div>
      <div className={styles.aboutMeContainer}>
        <PersonName nameInputs={nameInputs} saveNewData={saveNameData} />
        <WorkData workInputs={workInputs} saveNewData={saveWorkData} />
        <LearnAs learnInputs={learnInputs} saveNewData={saveLearnAsData} />
      </div>
      <div className={styles.alertAndProgress}>
        <AlertContainer />
        <ProgressBar personData={personData} />
      </div>
      <div className={styles.scienceAndDocumentContainer}>
        {/*  */}
        <EducationData
          educationInputs={educationInputs}
          saveNewData={saveEducationData}
          saveScan={setPersonData}
        />
        {/*  */}
        <DocumentData documentInputs={documentInputs} saveNewData={saveDocumentsData} />
      </div>
    </div>
  );
}

export default PersonData;