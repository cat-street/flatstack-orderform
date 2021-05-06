import { FC, useState } from 'react';

import StepsNav from '../../components/StepsNav/StepsNav';
import ShippingForm from '../ShippingForm/ShippingForm';
import FormLayout from '../../components/FormLayout/FormLayout';

import { BillingValues, ShippingValues } from '../../types/forms';

const initialUserState = {
  shippingData: {
    name: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    'postal-code': '',
  },
  billingData: {
    name: '',
    email: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    'postal-code': '',
  },
};

const FormContainer: FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(initialUserState);

  const setStep = (val: number) => {
    setFormStep(val);
  };

  const setData = (
    data: { shippingData: ShippingValues } | { billingData: BillingValues },
  ) => {
    console.log(data);
    setUserData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormLayout>
      <StepsNav />
      <ShippingForm setStep={setStep} setData={setData} />
    </FormLayout>
  );
};

export default FormContainer;
