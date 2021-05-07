import { FC } from 'react';

import styles from './FormHeader.module.scss';

type Props = {
  onFill: () => void;
};

const BillingHeader: FC<Props> = ({ onFill }: Props) => (
  <div className={styles['form-header']}>
    <h2 className={styles['form-header__title']}>Billing Information</h2>
    <button
      type="button"
      className={styles['form-header__link']}
      onClick={onFill}
    >
      Same as shipping
    </button>
  </div>
);

export default BillingHeader;
