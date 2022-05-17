import React from 'react';

import regImg from '../../../images/reg.png';
import styles from './regImage.module.css';

function regImage() {
  return (
    <img src={regImg} alt="img error" className={styles.regImage} />
  );
}

export default regImage;