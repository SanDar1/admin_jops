import React from 'react';

import SaveBtn from '../../../../UI/Button/CustomBtn';

import styles from './LearnAs.module.css';

function LearnAs({ learnInputs, saveNewData }) {
  return (
    <div className={styles.learnAs}>
      { learnInputs.component }
      <SaveBtn
        variant="outlined"
        customColor="black"
        customBorderColor="black"
        margin="20px 0 0 30px"
        onBtnClick={saveNewData}
        text="Сохранить"
      />
    </div>
  );
}

export default LearnAs;