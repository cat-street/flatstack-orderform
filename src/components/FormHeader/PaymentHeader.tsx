import { FC } from 'react';

import styles from './FormHeader.module.scss';

const PaymentHeader: FC = () => (
  <div className={styles['form-header']}>
    <h2 className={styles['form-header__title']}>Payment</h2>
    <p className={styles['form-header__secure-info']}>
      This is a secure 128-bit SSL encrypted payment
    </p>
  </div>
);

export default PaymentHeader;
