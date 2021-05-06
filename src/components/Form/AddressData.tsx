import { FC } from 'react';

import FormInputText from '../FormInput/FormInputText';
import FormInputSelect from '../FormInput/FormInputSelect';

import countryList from '../../utils/countryList';
import styles from './OrderForm.module.scss';

const AddressData: FC = () => (
  <>
    <h3 className={styles.form__subtitle}>Address</h3>
    <div className={styles.form__group}>
      <FormInputText name="address" type="text" placeholder="Street Address" />
      <FormInputText
        name="address2"
        type="text"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
      />
    </div>

    <div className={styles.form__group}>
      <FormInputText name="city" type="text" placeholder="City" />
    </div>

    <div className={styles.form__group}>
      <div className={styles.form__columns}>
        <FormInputSelect
          name="country"
          list={countryList}
          placeholder="Country"
          classMixin={styles.input__field_select}
        />
        <FormInputText name="postal-code" type="text" placeholder="Zip" />
      </div>
    </div>
  </>
);

export default AddressData;
