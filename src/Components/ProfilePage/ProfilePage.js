import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfileIcon from '../../UI/ProfileIcon/ProfileIcon';
import PersonData from './PersonData/PersonData';
import ProgramDetails from './ProgramContainer/ProgramDetails/ProgramDetails';
import ProgramContainer from './ProgramContainer/ProgramContainer';
import ProgramOptions from './ProgramContainer/ProgramOptions/ProgramOptions';
import NavigateMenu from '../../UI/NavegateMenu/NavigateMenu';

import ChatButton from '../../UI/Chat/ChatButton';


function ProfilePage() {
  const [naprIndex, setNaprIndex] = useState(
    localStorage.getItem('naprIndex') ? JSON.parse(localStorage.getItem('naprIndex')) : 0
  );

  const [userName, setUserName] = useState('');

  const [personData, setPersonData] = useState({
    id: JSON.parse(localStorage.getItem('personID')),
    secondName: '',
    name: '',
    thirdName: '',
    gender: '',
    birthDate: '',
    phoneNumber: '',
    citizenship: '',
    work: '',
    job: '',
    learnAs: '',
    education: '',
    educationSecondName: '',
    educationSeries: '',
    educationNumber: '',
    diplomScan: '',
    snils: '',
    passportSeries: '',
    passportNumber: '',
    passportGiven: '',
    personAddress: ''
  });

  useEffect(() => {
    fetch(`http://192.168.200.55:5000/api/profile/${personData.id}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
      }
    })
    .then(res => res.json())
    .then(person => {
      setPersonData(prev => {return {...prev,
        secondName: person.firstname ? person.firstname : '',
        name: person.name ? person.name : '',
        thirdName: person.patronymic ? person.patronymic : '',
        gender: person.sex === "male" ? 'Мужской' : 'Женский',
        birthDate: person.dateOfBirth ? person.dateOfBirth.slice(0, 10) : '',
        phoneNumber: person.number ? person.number : '',
        citizenship: person.citizenship ? person.citizenship : '',
        work: person.placeOfWork ? person.placeOfWork : '',
        job: person.post ? person.post : '',
        learnAs: person.typeOfEducation ? person.typeOfEducation : '',
        education: person.educationLevel ? person.educationLevel : '',
        educationSecondName: person.lastNameDiplom ? person.lastNameDiplom : '',
        educationSeries: person.diplomSeries ? person.diplomSeries : '',
        educationNumber: person.diplomNumber ? person.diplomNumber : '',
        diplomScan: person.diplomScan ? person.diplomScan : '',
        snils: person.snils ? person.snils : '',
        passportSeries: person.passportSeries ? person.passportSeries : '',
        passportNumber: person.passportNumber ? person.passportNumber : '',
        passportGiven: person.given ? person.given : '',
        personAddress: person.address ? person.address : ''
    }});

    setUserName(person.firstname + " " + person.name);

    localStorage.setItem('person', JSON.stringify(personData));
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh', marginBottom: '50px' }}>
      <ProfileIcon user={true} name={ userName } />
        <NavigateMenu user={true} />

        <Routes>
          <Route path="aboutMe" element={
            <PersonData personData={personData} setPersonData={setPersonData} setUserName={setUserName} />
          } />
          <Route path="programs" element={<ProgramContainer setNaprIndex={setNaprIndex} />} />
          <Route path={`programs/${naprIndex}`} element={<ProgramOptions naprIndex={naprIndex} />} />
          <Route path={`programs/${naprIndex}/details`} element={<ProgramDetails />} />
        </Routes>

        <ChatButton style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: '10'}} />
    </div>
  );
}

export default ProfilePage;