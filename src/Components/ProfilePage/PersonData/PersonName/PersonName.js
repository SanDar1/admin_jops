import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SaveBtn from '../../../../UI/Button/CustomBtn';
import styles from './PersonName.module.css';
import TextField from '@mui/material/TextField';

function PersonName({ nameInputs, saveNewData }) {
  return (
    <div className={styles.personName}>
      <Box style={{ marginTop: "20px" }}>
        <Grid container spacing={1}>
          {
            nameInputs.map(elem => (
              <Grid item xs={12} className={styles.gridItem} key={elem.label}>
                <TextField
                  required={elem.required}
                  disabled={elem.disabled}
                  value={elem.value}
                  onChange={elem.onChange}
                  label={elem.label}
                  size="small"
                  sx={{ width: "70%" }}
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
        margin="15px 0 0 40px"
        onBtnClick={saveNewData}
        text="Сохранить"
      />
    </div>
  );
}

export default PersonName;