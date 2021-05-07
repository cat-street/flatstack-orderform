import { FC } from 'react';

import FormInputText from '../FormInput/FormInputText';

import styles from './OrderForm.module.scss';

const BuyerData: FC = () => (
  <div className={styles.form__group}>
    <p className={styles.form__label}>Billing Contact</p>
    <div className={`${styles.form__rows} ${styles.form__rows_small}`}>
      <FormInputText name="name" type="text" placeholder="Full Name" />
      <FormInputText name="email" type="email" placeholder="Email Address" />
    </div>
  </div>
);

export default BuyerData;
