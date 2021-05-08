import { FC } from 'react';

import FormInputText from '../FormInput/FormInputText';
import FormInputCard from '../FormInput/FormInputCard';
import FormInputCardDate from '../FormInput/FormInputCardDate';

import styles from './OrderForm.module.scss';

const PaymentData: FC = () => (
  <>
    <div className={styles.form__group}>
      <p className={styles.form__label}>Cardholder Name</p>
      <FormInputText
        name="name"
        type="text"
        placeholder="Name as it appears on your card"
      />
    </div>

    <div className={styles.form__group}>
      <p className={styles.form__label}>Card Number</p>
      <FormInputCard
        type="text"
        name="card"
        placeholder="XXXX XXXX XXXX XXXX XXXX"
      />
    </div>

    <div className={styles.form__group}>
      <div className={`${styles.form__columns} ${styles.form__columns_small}`}>
        <div>
          <p className={styles.form__label}>Expire Date</p>
          <FormInputCardDate name="cardDate" type="text" placeholder="MM / YY" />
        </div>
        <div>
          <p className={styles.form__label}>Security Code</p>
          <FormInputText name="cvv" type="text" />
        </div>
      </div>
    </div>
  </>
);

export default PaymentData;
