import React from 'react';

import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import IconButton from '@mui/material/IconButton';
import CustomBtn from '../../../../../../UI/Button/CustomBtn';

import styles from './Contract.module.css';



const Input = styled('input')({
  display: 'none',
});



function Contract() {
  return (
    <div className={styles.contractWrapper}>
      <p className={styles.title}>Договор</p>
      <p style={{fontSize: '16px', marginLeft: '3%'}}>
        Вам необходимо скачать договор, подписать и <br />
        загрузить его скан.
      </p>
      <div className={styles.formGroup3}>
        <div className={styles.contract}>
          <AssignmentOutlinedIcon style={{fontSize: "60px", marginRight: "20px"}} />
          <div>
            <p className={styles.opportunity}>Шаблон договора</p>
            <label htmlFor="contractFile">
              <Input accept="image/*" id="contractFile" type="file" />
              <IconButton color="success" aria-label="add to shopping cart" component="span">
                <FileDownloadOutlinedIcon />
              </IconButton>
              Загрузить
            </label>
          </div>
        </div>
        <div className={styles.writtenContract}>
          <BorderColorOutlinedIcon style={{fontSize: "60px", marginRight: "20px"}} />
          <div>
            <p className={styles.opportunity}>Подписанный договор</p>
            <label htmlFor="writtenContractFile">
              <Input accept="image/*" id="writtenContractFile" type="file" />
              <IconButton color="primary" aria-label="add to shopping cart" component="span">
                <AttachFileOutlinedIcon />
              </IconButton>
              Прикрепить
            </label>
          </div>
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

export default Contract;