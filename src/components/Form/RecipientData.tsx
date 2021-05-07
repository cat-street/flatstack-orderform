import { FC } from 'react';

import FormInputText from '../FormInput/FormInputText';

import styles from './OrderForm.module.scss';

const RecipientData: FC = () => (
  <div className={styles.form__group}>
    <p className={styles.form__label}>Recipient</p>
    <div className={`${styles.form__rows} ${styles.form__rows_small}`}>
      <FormInputText name="name" type="text" placeholder="Full Name" />
      <div className={`${styles.form__columns} ${styles.form__columns_big}`}>
        <FormInputText name="phone" type="text" placeholder="Daytime Phone" />
        <p className={styles['form__phone-info']}>
          For delivery
          <br />
          questions only
        </p>
      </div>
    </div>
  </div>
);

export default RecipientData;
