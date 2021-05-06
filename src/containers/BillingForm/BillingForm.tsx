import { FC } from 'react';
import { Formik } from 'formik';

import { billingSchema } from '../../utils/validationSchema';
import { BillingValues, UserState } from '../../types/forms';

import AddressData from '../../components/Form/AddressData';
import OrderForm from '../../components/Form/OrderForm';
import BuyerData from '../../components/Form/BuyerData';

type Props = {
  data: UserState;
  setStep: (n: number) => void;
  setData: (data: {
    billingData: BillingValues;
    billingValid: boolean;
  }) => void;
};

const BillingForm: FC<Props> = ({ data, setStep, setData }: Props) => (
  <Formik
    initialValues={data.billingData}
    validationSchema={billingSchema}
    onSubmit={(values: BillingValues) => {
      setStep(2);
      setData({ billingData: values, billingValid: true });
    }}
  >
    <OrderForm title="Billing Information">
      <BuyerData />
      <AddressData title="Billing Address" />
    </OrderForm>
  </Formik>
);

export default BillingForm;
