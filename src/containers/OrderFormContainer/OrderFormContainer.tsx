import { FC } from 'react';

import StepsNav from '../../components/StepsNav/StepsNav';

import styles from './OrderFormContainer.module.scss';
import ShippingForm from './ShippingForm';

const OrderFormContainer: FC = () => (
  <div className={styles.form}>
    <StepsNav />
    <ShippingForm />
  </div>
);

export default OrderFormContainer;
