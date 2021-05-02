import { FC } from 'react';

import styles from './OrderFormContainer.module.scss';

const OrderFormContainer: FC = () => (
  <div className={styles.form}>
    <h2 className={styles.form__title}>Shipping Info</h2>
  </div>
);

export default OrderFormContainer;
