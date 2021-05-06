import { FC } from 'react';
import { Formik } from 'formik';

import { billingSchema } from '../../utils/validationSchema';
import { BillingValues } from '../../types/forms';

import AddressData from '../../components/Form/AddressData';
import OrderForm from '../../components/Form/OrderForm';
import BuyerData from '../../components/Form/BuyerData';

type Props = {
  setStep: (n: number) => void;
  setData: (data: { billingData: BillingValues }) => void;
};

const BillingForm: FC<Props> = ({ setStep, setData }: Props) => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      address: '',
      address2: '',
      city: '',
      country: '',
      'postal-code': '',
    }}
    validationSchema={billingSchema}
    onSubmit={(values: BillingValues) => {
      setStep(2);
      setData({ billingData: values });
    }}
  >
    <OrderForm title="Billing Information">
      <BuyerData />
      <AddressData title="Billing Address" />
    </OrderForm>
  </Formik>
);

export default BillingForm;
