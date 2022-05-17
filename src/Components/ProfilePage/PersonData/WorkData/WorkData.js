import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import SaveBtn from '../../../../UI/Button/CustomBtn';
import styles from './WorkData.module.css';

function PersonName({ workInputs, saveNewData }) {
  return (
    <div className={styles.additionalInfo}>
      <Box  style={{ marginTop: "40px" }}>
        <Grid container spacing={1}>
          {
            workInputs.map(elem => (
              <Grid item xs={12} className={styles.gridItem} key={elem.label}>
                <TextField
                  required={elem.required}
                  disabled={elem.disabled}
                  value={elem.value}
                  onChange={elem.onChange}
                  label={elem.label}
                  size="small"
                  style={{ marginLeft: elem.marginLeft }}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>
      <SaveBtn
        variant="outlined"
        customColor="black"
        customBorderColor="black"
        margin="40px 0 0 30px"
        onBtnClick={saveNewData}
        text="Сохранить"
      />
    </div>
  );
}

export default PersonName;