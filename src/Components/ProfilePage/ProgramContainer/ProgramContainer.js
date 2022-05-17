import React, { useEffect, useMemo, useState } from 'react';

import CustomButton from '../../../UI/Button/CustomBtn';
import Field from './Field/Field';

import snake1 from '../../../images/img1.jpg';
import snake2 from '../../../images/img2.jpg';
import snake3 from '../../../images/img3.jpg';

import AddIcon from '@mui/icons-material/Add';

import styles from './ProgramContainer.module.css';


function ProgramContainer({ setNaprIndex }) {
  const [fields, setFields] = useState([]);
  /////////////////////////////////////////////////////////
  const randomNum = () => Math.floor(Math.random() * 3);
  /////////////////////////////////////////////////////////


  useEffect(() => {
    // Брать данные с серва, но пока костыль с localStorage
    const arr = JSON.parse(localStorage.getItem('fields'));
    if (arr != null) setFields([...arr]);
  }, [fields]);



  const renderFields = useMemo(() =>
    fields.map((elem, i) => <Field content={elem} url={i} setNaprIndex={setNaprIndex} key={i} />
  ), [fields]);

  const images = {
    0: snake1,
    1: snake2,
    2: snake3
  }

  function addField() {
    const phIndex = randomNum();

    setFields([...fields, {
      title: "Направление",
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      image: images[phIndex]
    }]);    

    // Пока что localStorage, потом надо будет пушить на сервер
    localStorage.setItem('fields', JSON.stringify([...fields, {
      title: "Направление",
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      image: images[phIndex]
    }]));
  }

  return (
    <div className={styles.programContainer}>
      <CustomButton
        variant="outlined"
        customColor="green"
        customBorderColor="green"
        text="Добавить"
        onBtnClick={addField}
        endIcon={<AddIcon />}
      />

      <div>{ renderFields }</div>
    </div>
  );
}

export default ProgramContainer;