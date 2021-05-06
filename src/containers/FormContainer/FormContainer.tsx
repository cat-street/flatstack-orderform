import { FC, useState } from 'react';

import StepsNav from '../../components/StepsNav/StepsNav';
import ShippingForm from '../ShippingForm/ShippingForm';
import FormLayout from '../../components/FormLayout/FormLayout';

import { BillingValues, ShippingValues } from '../../types/forms';
import BillingForm from '../BillingForm/BillingForm';

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
    setUserData((prevData) => ({ ...prevData, ...data }));
  };

  let form;
  switch (formStep) {
    case 2: {
      form = <BillingForm setStep={setStep} setData={setData} />;
      break;
    }
    default: {
      form = <ShippingForm setStep={setStep} setData={setData} />;
    }
  }

  return (
    <FormLayout>
      <StepsNav />
      {form}
    </FormLayout>
  );
};

export default FormContainer;
