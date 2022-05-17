import React, { useState, useEffect } from 'react';

import styles from './ProgressBar.module.css';

function ProgressBar({ personData }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let blocks = 0;
    if (
        personData.secondName !== '' && personData.name !== '' &&
        personData.thirdName !== '' && personData.gender !== '' &&
        personData.birthDate !== ''
      ) {
        blocks += 20;
    }

    if (
        personData.phoneNumber !== '' && personData.citizenship !== '' &&
        personData.work !== '' && personData.job !== ''
      ) {
        blocks += 20;
    }

    if (personData.learnAs !== '') {
      blocks += 20;
    }

    if (
        personData.education !== '' && personData.educationSecondNmae !== '' &&
        personData.educationSeries !== '' && personData.educationNumber !== ''
      ) {
        blocks += 20;
    }

    if (
        personData.snils !== '' && personData.passportSeries !== '' &&
        personData.passportNumber !== '' && personData.passportGiven !== '' &&
        personData.personAddress !== ''
      ) {
        blocks += 20;
    }

    setProgress(blocks);
  }, [personData]);

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={
        {
          background: `linear-gradient(120deg, #70caf2 0%, #2972a0 100%)`,
          width: `${progress*450/100}px`,
          borderRadius: '5px'
        }
      }></div>
      <div className={styles.points}>1/5</div>
      <div className={styles.points}>2/5</div>
      <div className={styles.points}>3/5</div>
      <div className={styles.points}>4/5</div>
      <div className={styles.points}>5/5</div>
    </div>
  );
}

export default ProgressBar;