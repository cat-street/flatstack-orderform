import { FC } from 'react';
import { Form, Formik } from 'formik';

import { userSchema } from './validationSchema';
import countryList from '../../utils/countryList';
import styles from './Form.module.scss';
import FormTextInput from './FormTextInput';
import FormSelect from './FormSelect';

type Values = {
  fullName: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  zip: string;
};

const ShippingForm: FC = () => (
  <Formik
    initialValues={{
      fullName: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      country: '',
      zip: '',
    }}
    validationSchema={userSchema}
    onSubmit={(values: Values) => {
      console.log(values);
    }}
  >
    <Form>
      <h2 className={styles.form__title}>Shipping Info</h2>
      <h3 className={styles.form__subtitle}>Recipient</h3>
      <div className={styles.form__group}>
        <FormTextInput name="fullName" type="text" placeholder="Full Name" />
        <div className={styles.form__columns}>
          <FormTextInput name="phone" type="text" placeholder="Daytime Phone" />
          <p className={styles['form__phone-info']}>
            For delivery
            <br />
            questions only
          </p>
        </div>
      </div>

      <h3 className={styles.form__subtitle}>Address</h3>
      <div className={styles.form__group}>
        <FormTextInput
          name="address1"
          type="text"
          placeholder="Street Address"
        />
        <FormTextInput
          name="address2"
          type="text"
          placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        />
      </div>

      <div className={styles.form__group}>
        <FormTextInput name="city" type="text" placeholder="City" />
      </div>

      <div className={styles.form__group}>
        <div className={styles.form__columns}>
          <FormSelect
            name="country"
            list={countryList}
            placeholder="Country"
            classMixin={styles.input__field_select}
          />
          <FormTextInput name="zip" type="text" placeholder="Zip" />
        </div>
      </div>
    </Form>
  </Formik>
);

export default ShippingForm;
