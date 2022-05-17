import React from 'react';
import styles from './Icon.module.css';

import icon from './icon.png'
import { Link } from 'react-router-dom';

function InsIcon() {
  return (
    <Link to="/" className={styles.iconLink}>
      <div className={styles.insIconContainer}>
        <img src={icon} alt="img error" className={styles.insIcon} />
      </div>
    </Link>
  );
}

export default InsIcon;