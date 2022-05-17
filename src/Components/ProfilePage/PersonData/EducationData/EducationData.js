import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import SaveBtn from '../../../../UI/Button/CustomBtn';

import styles from './EducationData.module.css';



const Input = styled('input')({
  display: 'none',
});



function EducationData({ educationInputs, saveNewData, saveScan }) {
  const [isFilePinned, setIsFilePinned] = useState(false);


  const pinFile = e => {
    if (e.target.files) setIsFilePinned(true);
    saveScan(prev => {return {...prev, diplomScan: e.target.files[0].name}});

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('name', e.target.files[0].name);
    console.log(formData.get('file'));


    // axios({
    //   url: "http://192.168.200.55:5000/api/profile/files/uploadDiplom",
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
    //   },
    //   body: JSON.stringify({
    //     id: JSON.parse(localStorage.getItem('personID')),
    //   }),
    //   files: formData
    // })
    // .then(res => res.json())
    // .then(res => { console.log(res) })

    fetch("http://192.168.200.55:5000/api/profile/files/uploadDiplom", {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access'))
      },
      body: formData
    })
    .then(res => res.json())
    .then(res => { console.log(res) })
  }


  return (
    <div>
      <div className={styles.scienceDegree}>
        <p className={styles.scienceDegreeTitle}>Образование</p>
        <Box className={styles.boxGridContainer}>
          <Grid container spacing={1}>
            {
              educationInputs.map(elem => (
                elem.component ?
                elem.component
                :
                <Grid item xs={12} className={styles.gridItem} key={elem.label}>
                  <TextField
                    required={elem.required}
                    value={elem.value}
                    onChange={elem.onChange}
                    label={elem.label}
                    sx={{ width: '80%' }}
                    size="small"
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>

        <div className={styles.pinDiplom}>
          <SchoolOutlinedIcon style={
            isFilePinned ?
            { fontSize: "50px", marginRight: "10px", color: "#3c89b6" }
            :
            { fontSize: "50px", marginRight: "10px", color: "black" }
          } />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <p>Диплом</p>
            <label htmlFor="diplomFile">
              <Input accept="*" id="diplomFile" type="file" onChange={e => pinFile(e)} />
              <IconButton color="primary" component="span">
                <AttachFileOutlinedIcon />
              </IconButton>
              Прикрепить
            </label>
          </div>
        </div>

        <SaveBtn
          variant="outlined"
          customColor="black"
          customBorderColor="black"
          margin="10px 0 0 30px"
          onBtnClick={saveNewData}
          text="Сохранить"
        />
      </div>
    </div>
  );
}

export default EducationData;