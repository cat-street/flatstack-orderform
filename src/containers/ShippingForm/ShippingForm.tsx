import { FC } from 'react';
import { Formik } from 'formik';

import { shippingSchema } from '../../utils/validationSchema';
import { ShippingValues, UserState } from '../../types/forms';

import AddressData from '../../components/Form/AddressData';
import RecipientData from '../../components/Form/RecipientData';
import OrderForm from '../../components/Form/OrderForm';
import ShippingHeader from '../../components/FormHeader/ShippingHeader';

type Props = {
  data: UserState;
  setStep: (n: number) => void;
  setData: (data: {
    shippingData: ShippingValues;
    shippingValid: boolean;
  }) => void;
};

const ShippingForm: FC<Props> = ({ data, setStep, setData }: Props) => (
  <Formik
    initialValues={data.shippingData}
    validationSchema={shippingSchema}
    onSubmit={(values) => {
      setData({ shippingData: values, shippingValid: true });
      setStep(2);
    }}
  >
    <OrderForm submitText="Continue">
      <ShippingHeader />
      <RecipientData />
      <AddressData title="Address" />
    </OrderForm>
  </Formik>
);

export default ShippingForm;
