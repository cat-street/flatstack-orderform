import { FC } from 'react';

import FormTextInput from '../../containers/FormInputs/FormTextInput';

import styles from './OrderForm.module.scss';

const BuyerData: FC = () => (
  <div className={styles.form__group}>
    <p className={styles.form__label}>Billing Contact</p>
    <div className={`${styles.form__rows} ${styles.form__rows_small}`}>
      <FormTextInput name="name" placeholder="Full Name" />
      <FormTextInput name="email" type="email" placeholder="Email Address" />
    </div>
  </div>
);

export default BuyerData;
