import React from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CustomBtn from '../../../../../UI/Button/CustomBtn';

import styles from './ActContainer.module.css';



const Input = styled('input')({
  display: 'none',
});



function ActContainer() {
  return (
    <div className={styles.actContainer}>
      <p className={styles.title}>Акт</p>
      <p style={{fontSize: '16px', marginLeft: '1%'}}>
        Вам необходимо скачать акт, подписать и <br />
        загрузить скан.
      </p>
      <div className={styles.formGroup3}>
        <div className={styles.contract}>
          <SummarizeOutlinedIcon style={{fontSize: "60px", marginRight: "20px"}} />
          <div>
            <p className={styles.opportunity}>Шаблон акта</p>
            <label htmlFor="actFile">
              <Input accept="image/*" id="contractFile" type="file" />
              <IconButton color="success" aria-label="add to shopping cart" component="span">
                <FileDownloadOutlinedIcon />
              </IconButton>
              Скачать
            </label>
          </div>
        </div>
        <div className={styles.writtenContract}>
          <BorderColorOutlinedIcon style={{fontSize: "60px", marginRight: "20px"}} />
          <div>
            <p className={styles.opportunity}>Подписанный договор</p>
            <label htmlFor="actFile">
              <Input accept="image/*" id="contractFile" type="file" />
              <IconButton color="primary" aria-label="add to shopping cart" component="span">
                <FileUploadOutlinedIcon />
              </IconButton>
              Загрузить
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

export default ActContainer;