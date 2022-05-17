import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

import SaveBtn from '../../../../UI/Button/CustomBtn';

import styles from './DocumentData.module.css';



const Input = styled('input')({
  display: 'none',
});



function DocumentData({ documentInputs, saveNewData }) {
  const [isFilePinned, setIsFilePinned] = useState({
    passportFile: false,
    snilsFile: false
  });

 

  const pinFile = e => {
    switch (e.target.id) {
      case "snilsFile":
        setIsFilePinned(prev => {return {...prev, snilsFile: true}});
        break;
      case "passportFile":
        setIsFilePinned(prev => {return {...prev, passportFile: true}});
        break;
    }
    console.log(e.target.files);
  }



  return (
    <div className={styles.documentContainer}>
      <p className={styles.documentTitle}>Документы</p>
      <Box className={styles.boxGridContainer}>
        <Grid container spacing={1}>
          {
            documentInputs.map(elem => (
              elem.component ?
              elem.component
              :
              <Grid item xs={elem.xs} className={styles.gridItem} key={elem.label}>
                <TextField
                  multiline={elem.multiline}
                  minRows={elem.minRows}
                  maxRows={elem.maxRows}
                  required={elem.required}
                  value={elem.value}
                  onChange={elem.onChange}
                  sx={elem.sx}
                  label={elem.label}
                  size="small"
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>

      <div className={styles.pinPassportAndSNILS}>
        <AssignmentIndOutlinedIcon style={
          isFilePinned.passportFile ?
          { fontSize: "50px", marginLeft: "20px", marginRight: "10px", color: "#3c89b6" }
          :
          { fontSize: "50px", marginLeft: "20px", marginRight: "10px", color: "black" }
        } />
        <div  style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p>Паспорт</p>
          <label htmlFor="passportFile">
            <Input accept="*" id="passportFile" type="file" onChange={pinFile} />
            <IconButton color="primary" component="span">
              <AttachFileOutlinedIcon />
            </IconButton>
            Прикрепить
          </label>
        </div>
        <HistoryEduOutlinedIcon style={
          isFilePinned.snilsFile ?
          { fontSize: "50px", marginLeft: "60px", marginRight: "10px", color: "#3c89b6" }
          :
          { fontSize: "50px", marginLeft: "60px", marginRight: "10px", color: "black" }
        } />
        <div  style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p>Свидетельство</p>
          <label htmlFor="snilsFile">
            <Input accept="*" id="snilsFile" type="file" onChange={pinFile} />
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
  );
}

export default DocumentData;