import { FC } from 'react';
import { Formik } from 'formik';

import { paymentSchema } from '../../utils/validationSchema';

import OrderForm from '../../components/Form/OrderForm';
import PaymentHeader from '../../components/FormHeader/PaymentHeader';
import PaymentData from '../../components/Form/PaymentData';

type Props = {
  setStep: (n: number) => void;
  setData: (data: { maskedCardNumber: string }) => void;
};

const PaymentForm: FC<Props> = ({ setStep, setData }: Props) => (
  <Formik
    initialValues={{
      name: '',
      card: '',
      cardDate: '',
      cvv: '',
    }}
    validationSchema={paymentSchema}
    onSubmit={(values) => {
      const maskedCardNumber = `${values.card.slice(0, 2)}
      xxxxxx
      ${values.card.slice(-2)}`;
      setData({ maskedCardNumber });
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
