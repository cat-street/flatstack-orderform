import { FC } from 'react';

import FormTextInput from '../../containers/FormInputs/FormTextInput';

import countryList from '../../utils/countryList';
import styles from './OrderForm.module.scss';
import FormCityInput from '../../containers/FormInputs/FormCityInput';
import FormSelectInput from '../../containers/FormInputs/FormSelectInput';

type Props = {
  title: string;
};

const AddressData: FC<Props> = ({ title }: Props) => (
  <div className={styles.form__group}>
    <p className={styles.form__label}>{title}</p>
    <div className={`${styles.form__rows} ${styles.form__rows_big}`}>
      <div className={`${styles.form__rows} ${styles.form__rows_small}`}>
        <FormTextInput
          name="address"
          placeholder="Street Address"
        />
        <FormTextInput
          name="address2"
          placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        />
      </div>

      <FormCityInput name="city" placeholder="City" />

      <div className={`${styles.form__columns} ${styles.form__columns_big}`}>
        <FormSelectInput
          name="country"
          list={countryList}
          placeholder="Country"
        />
        <FormTextInput name="postcode" placeholder="Zip" />
      </div>
    </div>
  </div>
);

export default AddressData;
