import { FC } from 'react';

import StepsNav from '../../components/StepsNav/StepsNav';

import styles from './OrderFormContainer.module.scss';
import ShippingForm from '../OrderForm/ShippingForm';

const OrderFormContainer: FC = () => (
  <div className={styles['form-container']}>
    <StepsNav />
    <ShippingForm />
  </div>
);

export default OrderFormContainer;
