import { FC, useState } from 'react';

import StepsNav from '../../components/StepsNav/StepsNav';
import ShippingForm from '../OrderForm/ShippingForm';

import { BillingValues, ShippingValues } from '../../types/forms';
import styles from './OrderFormContainer.module.scss';

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

const OrderFormContainer: FC = () => {
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
    <div className={styles['form-container']}>
      <StepsNav />
      <ShippingForm setStep={setStep} setData={setData} />
    </div>
  );
};

export default OrderFormContainer;
