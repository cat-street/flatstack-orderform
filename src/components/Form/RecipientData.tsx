import { FC } from 'react';

import FormInputText from '../FormInput/FormInputText';

import styles from './OrderForm.module.scss';

const RecipientData: FC = () => (
  <>
    <h3 className={styles.form__subtitle}>Recipient</h3>
    <div className={styles.form__group}>
      <FormInputText name="name" type="text" placeholder="Full Name" />
      <div className={styles.form__columns}>
        <FormInputText name="phone" type="text" placeholder="Daytime Phone" />
        <p className={styles['form__phone-info']}>
          For delivery
          <br />
          questions only
        </p>
      </div>
    </div>
  </>
);

export default RecipientData;
