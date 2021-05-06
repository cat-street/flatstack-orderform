import { FC } from 'react';

import FormInputText from '../FormInput/FormInputText';

import styles from './OrderForm.module.scss';

const BuyerData: FC = () => (
  <>
    <h3 className={styles.form__subtitle}>Billing Contact</h3>
    <div className={styles.form__group}>
      <FormInputText name="name" type="text" placeholder="Full Name" />
      <FormInputText name="email" type="email" placeholder="Email Address" />
    </div>
  </>
);

export default BuyerData;
