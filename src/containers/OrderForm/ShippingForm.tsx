import { FC } from 'react';
import { Form, Formik } from 'formik';

import countryList from '../../utils/countryList';
import FormInputText from './FormInputText';
import FormInputSelect from './FormInputSelect';

import { shippingSchema } from './validationSchema';
import { ShippingValues } from '../../types/forms';
import styles from './Form.module.scss';

type Props = {
  setStep: (n: number) => void;
  setData: (data: { shippingData: ShippingValues }) => void;
};

const ShippingForm: FC<Props> = ({ setStep, setData }: Props) => (
  <Formik
    initialValues={{
      name: '',
      phone: '',
      address: '',
      address2: '',
      city: '',
      country: '',
      'postal-code': '',
    }}
    validationSchema={shippingSchema}
    onSubmit={(values: ShippingValues) => {
      console.log(values);
      setStep(2);
      setData({ shippingData: values });
    }}
  >
    <Form>
      <h2 className={styles.form__title}>Shipping Info</h2>
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

      <h3 className={styles.form__subtitle}>Address</h3>
      <div className={styles.form__group}>
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

      <button type="submit" className={styles.form__submit}>
        Continue
      </button>
    </Form>
  </Formik>
);

export default ShippingForm;
