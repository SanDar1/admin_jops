import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProgramOptions.module.css';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CustomBtn from '../../../../UI/Button/CustomBtn';

import AddIcon from '@mui/icons-material/Add';

function ProgramOptions({ naprIndex }) {
  const napravlenia = ['Math', 'Physics', 'English', 'Programming'];
  const [selectedNapr, setSelectedNapr] = useState("");

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('fields'));
    setSelectedNapr(arr[naprIndex].title);
  }, [])

  const changeNapr = () => {
    const arr = JSON.parse(localStorage.getItem('fields'));
    arr[naprIndex].title = selectedNapr;

    localStorage.setItem('naprIndex', JSON.stringify(naprIndex));
    localStorage.setItem('fields', JSON.stringify(arr));
  }

  return (
    <div style={{ minHeight: '100vh'}}>
      <div className={styles.programOptionsWrapper}>
        <TextField
          select
          label="Выберите направление"
          size="small"
          sx={{ width: "80%" }}
          value={selectedNapr}
          onChange={e => setSelectedNapr(e.target.value)}
        >
          {
            napravlenia.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))
          }
        </TextField>
      </div>

      <Link to="details" style={{ textDecoration: 'none' }}>
        <CustomBtn
          variant="outlined"
          customColor="green"
          customBorderColor="green"
          text="Добавить"
          endIcon={<AddIcon />}
          margin="20px 0 0 380px"
          onBtnClick={changeNapr}
        />
      </Link>
    </div>
  );
}

export default ProgramOptions;