import React from 'react';
import { Link } from 'react-router-dom';

import ActContainer from './ActContainer/ActContainer';
import ContractAndPayment from './ContractAndPayment/ContractAndPayment';
import CustomBtn from '../../../../UI/Button/CustomBtn';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

import styles from './ProgramDetails.module.css';

function ProgramDetails() {
  return (
    <div className={styles.programDetails}>
      <Link to="/profile/programs" style={{ textDecoration: 'none' }}>
        <CustomBtn
          variant="outlined"
          customColor="blue"
          customBorderColor="blue"
          text="Вернуться к направлениям"
          startIcon={<KeyboardBackspaceOutlinedIcon />}
        />
      </Link>

      <ContractAndPayment />
      <ActContainer />
    </div>
  );
}

export default ProgramDetails;