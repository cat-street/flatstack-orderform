import { FC } from 'react';

import FormInputText from '../FormInput/FormInputText';
import FormInputSelect from '../FormInput/FormInputSelect';

import countryList from '../../utils/countryList';
import styles from './OrderForm.module.scss';

type Props = {
  title: string;
};

const AddressData: FC<Props> = ({ title }: Props) => (
  <div className={styles.form__group}>
    <p className={styles.form__label}>{title}</p>
    <div className={`${styles.form__rows} ${styles.form__rows_big}`}>
      <div className={`${styles.form__rows} ${styles.form__rows_small}`}>
        <FormInputText
          name="address"
          type="text"
          placeholder="Street Address"
        />
        <FormInputText
          name="address2"
          type="text"
          placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        />
      </div>

      <FormInputText name="city" type="text" placeholder="City" />

      <div className={`${styles.form__columns} ${styles.form__columns_big}`}>
        <FormInputSelect
          name="country"
          list={countryList}
          placeholder="Country"
          classMixin={styles.input__field_select}
        />
        <FormInputText name="postcode" type="text" placeholder="Zip" />
      </div>
    </div>
  </div>
);

export default AddressData;
