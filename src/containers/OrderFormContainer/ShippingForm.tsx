import { FC } from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

import validationSchema from './validationSchema';
import countryList from '../../utils/countryList';
import styles from './OrderFormContainer.module.scss';

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
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    <Form>
      <h2 className={styles.form__title}>Shipping Info</h2>
      <h3>Recipient</h3>
      <ErrorMessage name="fullName" />
      <Field name="fullName" type="text" placeholder="Full Name" />
      <ErrorMessage name="phone" />
      <Field name="phone" type="text" placeholder="Daytime Phone" />
      <p>For delivery questions only</p>

      <h3>Address</h3>
      <ErrorMessage name="address1" />
      <Field name="address1" type="text" placeholder="Street Address" />
      <ErrorMessage name="address2" />
      <Field
        name="address2"
        type="text"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
      />
      <ErrorMessage name="city" />
      <Field name="city" type="text" placeholder="City" />
      <ErrorMessage name="country" />
      <Field name="country" as="select">
        <option value="">Country</option>
        {countryList.map((el) => (
          <option value={el} key={el}>{el}</option>
        ))}
      </Field>
      <ErrorMessage name="zip" />
      <Field name="zip" type="text" placeholder="Zip" />
    </Form>
  </Formik>
);

export default ShippingForm;
