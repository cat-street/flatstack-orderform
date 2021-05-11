import { FC } from 'react';

import FormTextInput from '../../containers/FormInputs/FormTextInput';

import styles from './OrderForm.module.scss';

const RecipientData: FC = () => (
  <div className={styles.form__group}>
    <p className={styles.form__label}>Recipient</p>
    <div className={`${styles.form__rows} ${styles.form__rows_small}`}>

      <FormTextInput name="name" placeholder="Full Name" />

      <div className={`${styles.form__columns} ${styles.form__columns_big}`}>
        <FormTextInput name="phone" placeholder="Daytime Phone" />
        <p className={styles['form__phone-info']}>
          For delivery questions only
        </p>
      </div>
    </div>
  </div>
);

export default RecipientData;
