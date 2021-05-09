import {
  FC, useContext, useEffect, useState,
} from 'react';

import { BillingValues, ShippingValues } from '../../types/forms';
import GeoContext from '../../context/geoContext';

import StepsNav from '../../components/StepsNav/StepsNav';
import ShippingForm from '../Forms/ShippingForm';
import FormLayout from '../../components/FormLayout/FormLayout';
import Confirmation from '../Confirmation/Confirmation';

import BillingForm from '../Forms/BillingForm';
import PaymentForm from '../Forms/PaymentForm';

const initialUserState = {
  shippingData: {
    name: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    postcode: '',
  },
  billingData: {
    name: '',
    email: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    postcode: '',
  },
  shippingValid: false,
  billingValid: false,
};

const FormContainer: FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [userData, setUserData] = useState(initialUserState);
  const { address } = useContext(GeoContext);

  const setStep = (val: number) => {
    setFormStep(val);
  };

  const setData = (
    data: { shippingData: ShippingValues }
    | { billingData: BillingValues }
    | { maskedCardNumber: string },
  ) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
  };

  useEffect(() => {
    if (address.city && address.country && address.postcode) {
      const shippingData = { ...userData.shippingData, ...address };
      const billingData = { ...userData.billingData, ...address };
      setData({ shippingData });
      setData({ billingData });
    }
  }, [address]);

  let form;
  switch (formStep) {
    case 2: {
      form = (
        <BillingForm data={userData} setStep={setStep} setData={setData} />
      );
      break;
    }
    case 3: {
      form = <PaymentForm setStep={setStep} />;
      break;
    }
    case 4: {
      form = <Confirmation />;
      break;
    }
    default: {
      form = (
        <ShippingForm data={userData} setStep={setStep} setData={setData} />
      );
    }
  }

  return (
    <FormLayout>
      {formStep !== 4 && (
        <StepsNav step={formStep} setStep={setStep} data={userData} />
      )}
      {form}
    </FormLayout>
  );
};

export default FormContainer;
