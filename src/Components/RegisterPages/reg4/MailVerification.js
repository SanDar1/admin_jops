import React, { useState, useEffect} from 'react';

import styles from './MailVerification.module.css';
import RegImage from '../regImage/regImage';

function MailVerification() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem("person")).email);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.regMailVerifyContainer}>
        <p className={styles.greetings}>Создайте свой профиль</p>
        <div className={styles.formBackground}>
          <p className={styles.stage}>4/4</p>
          <div className={styles.mailLetter}>
            <p className={styles.paragraph}>
              Чтобы продолжить регистрацию, перейдите по ссылке в письме,
              мы отправили его на {email}
            </p>
            <p className={styles.paragraph}>
              Если вы не получили письмо, нажмите "Отправить повторно" через ТАЙМЕР
              или напиши на ips3nntu@mail.ru
            </p>
          </div>
          <RegImage />
        </div>
      </div>
    </div>
  );
}

export default MailVerification;