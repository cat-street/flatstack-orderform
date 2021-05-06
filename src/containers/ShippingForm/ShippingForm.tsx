import { FC } from 'react';
import { Formik } from 'formik';

import { shippingSchema } from '../../utils/validationSchema';
import { ShippingValues } from '../../types/forms';

import AddressData from '../../components/Form/AddressData';
import RecipientData from '../../components/Form/RecipientData';
import OrderForm from '../../components/Form/OrderForm';

type Props = {
  setStep: (n: number) => void;
  setData: (data: {
    shippingData: ShippingValues;
    shippingValid: boolean;
  }) => void;
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
      setStep(2);
      setData({ shippingData: values, shippingValid: true });
    }}
  >
    <OrderForm title="Shipping Info">
      <RecipientData />
      <AddressData title="Address" />
    </OrderForm>
  </Formik>
);

export default ShippingForm;
