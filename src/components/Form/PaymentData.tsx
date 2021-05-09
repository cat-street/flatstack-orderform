import { FC } from 'react';

import FormCardDateInput from '../../containers/FormInputs/FormCardDateInput';
import FormCardInput from '../../containers/FormInputs/FormCardInput';
import FormTextInput from '../../containers/FormInputs/FormTextInput';

import styles from './OrderForm.module.scss';

const PaymentData: FC = () => (
  <>
    <div className={styles.form__group}>
      <p className={styles.form__label}>Cardholder Name</p>
      <FormTextInput
        name="ccname"
        placeholder="Name as it appears on your card"
      />
    </div>

    <div className={styles.form__group}>
      <p className={styles.form__label}>Card Number</p>
      <FormCardInput
        name="cardnumber"
        placeholder="XXXX XXXX XXXX XXXX XXXX"
      />
    </div>

    <div className={styles.form__group}>
      <div className={`${styles.form__columns} ${styles.form__columns_small}`}>
        <div>
          <p className={styles.form__label}>Expire Date</p>
          <FormCardDateInput name="cc-exp" placeholder="MM / YY" />
        </div>
        <div>
          <p className={styles.form__label}>Security Code</p>
          <FormTextInput type="password" name="cvc" maxLength={3} />
        </div>
      </div>
    </div>
  </>
);

export default PaymentData;
