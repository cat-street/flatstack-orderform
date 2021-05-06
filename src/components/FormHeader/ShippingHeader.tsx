import { FC } from 'react';

import styles from './FormHeader.module.scss';

const ShippingHeader: FC = () => (
  <div className={styles['form-header']}>
    <h2 className={styles['form-header__title']}>Shipping Info</h2>
  </div>
);

export default ShippingHeader;
