import React, { useState } from 'react';

import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomBtn from '../../../../../../UI/Button/CustomBtn';

import styles from './Payment.module.css';

function Payment() {
  const arr = JSON.parse(localStorage.getItem('fields'));
  const naprIndex = JSON.parse(localStorage.getItem('naprIndex'));

  const [blockedBtns, setBlocks] = useState({
    block2: !arr[naprIndex].check1,
    block3: !arr[naprIndex].check2,
    block4: !arr[naprIndex].check3,
  });

  const saveFirstFile = () => {
    arr[naprIndex].check1 = true;
    setBlocks(prev => {return {...prev, block2: false}});
    localStorage.setItem('fields', JSON.stringify(arr));
  }
  const saveSecondFile = () => {
    arr[naprIndex].check2 = true;
    setBlocks(prev => {return {...prev, block3: false}});
    localStorage.setItem('fields', JSON.stringify(arr));
  }
  const saveThirdFile = () => {
    arr[naprIndex].check3 = true;
    setBlocks(prev => {return {...prev, block4: false}});
    localStorage.setItem('fields', JSON.stringify(arr));
  }
  const saveFourthFile = () => {
    arr[naprIndex].check4 = true;
    localStorage.setItem('fields', JSON.stringify(arr));
  }

  return (
    <div className={styles.paymentWrapper}>
      <p className={styles.title}>Оплата</p>
      <p style={{fontSize: '16px', marginLeft: '3%'}}>
        Для оплаты воспользуйтесь реквизитами или QR-кодом. <br />
        После оплаты необходимо загрузить скан чека.
      </p>
      <div className={styles.formGroup3}>
        <div className={styles.contract}>
          <CreditCardOutlinedIcon style={{fontSize: "60px", marginRight: "20px"}} />
          <div>
            <p className={styles.opportunity}>Способ оплаты</p>
            <button className={styles.openBtn}>Открыть</button>
          </div>
        </div>
        <div className={styles.writtenContract}>
          <CurrencyRubleOutlinedIcon style={{fontSize: "60px", marginLeft: "30px", marginRight: "10px"}} />
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={5} className={styles.gridItem}>
                <button className={styles.stageBtn} onClick={saveFirstFile}>1 этап</button>
                <p className={styles.pinWrapper}>Прикрепить</p>
              </Grid>
              <Grid item xs={5} className={styles.gridItem}>
                <button className={styles.stageBtn} onClick={saveSecondFile} disabled={blockedBtns.block2}>2 этап</button>
                <p className={styles.pinWrapper}>Прикрепить</p>
              </Grid>
              <Grid item xs={5} className={styles.gridItem}>
                <button className={styles.stageBtn} onClick={saveThirdFile} disabled={blockedBtns.block3}>3 этап</button>
                <p className={styles.pinWrapper}>Прикрепить</p>
              </Grid>
              <Grid item xs={5} className={styles.gridItem}>
                <button className={styles.stageBtn} onClick={saveFourthFile} disabled={blockedBtns.block4}>4 этап</button>
                <p className={styles.pinWrapper}>Прикрепить</p>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className={styles.accessWrapper}>
      <CustomBtn
        variant="outlined"
        customColor="black"
        customBorderColor="black"
        margin="0 20px 0 10%"
        text="Сохранить"
      />
        <LockOutlinedIcon sx={{ fontSize: 60, color: 'green' }} />
        <p>Доступ откроется после <br /> проверки документов</p>
      </div>
    </div>
  );
}

export default Payment