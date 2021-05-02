import { FC } from 'react';

import StepsNav from '../../components/StepsNav/StepsNav';

import styles from './OrderFormContainer.module.scss';

const OrderFormContainer: FC = () => (
  <div className={styles.form}>
    <StepsNav />
    <h2 className={styles.form__title}>Shipping Info</h2>
  </div>
);

export default OrderFormContainer;
