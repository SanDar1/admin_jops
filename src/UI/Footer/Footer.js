import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; НГТУ</p>
      <a href="https://www.nntu.ru/">Сайт НГТУ</a>
      <a href="/">Сайт заказчика</a>
    </footer>
  );
}

export default Footer;