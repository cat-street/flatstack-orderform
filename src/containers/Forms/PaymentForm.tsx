import { FC } from 'react';
import { Formik } from 'formik';

import { paymentSchema } from '../../utils/validationSchema';

import OrderForm from '../../components/Form/OrderForm';
import PaymentHeader from '../../components/FormHeader/PaymentHeader';
import PaymentData from '../../components/Form/PaymentData';

type Props = {
  setStep: (n: number) => void;
};

const PaymentForm: FC<Props> = ({ setStep }: Props) => (
  <Formik
    initialValues={{
      ccname: '',
      cardnumber: '',
      'cc-exp': '',
      cvc: '',
    }}
    validationSchema={paymentSchema}
    onSubmit={() => {
      setStep(4);
    }}
  >
    <OrderForm submitText="Pay Securely" autoComplete="off">
      <PaymentHeader />
      <PaymentData />
    </OrderForm>
  </Formik>
);

export default PaymentForm;
