import { FC } from 'react';

import styles from './ConfirmationLayout.module.scss';

const ConfirmationLayout: FC = () => (
  <>
    <div className={styles.overlay} />
    <div className={styles.confirmation}>
      <h2 className={styles.confirmation__header}>Thank you for your order!</h2>
      <p className={styles.confirmation__number}>Order number is: 188787788</p>
      <p className={styles.confirmation__text}>
        Your will receive an email confirmation shortly to{' '}
        <a
          href="mailto:jonathan.smith@gmail.com"
          className={styles.confirmation__email}
        >
          jonathan.smith@gmail.com
        </a>
      </p>
      <p className={styles.confirmation__text}>
        Estimated delivery Day is{' '}
        <span className={styles.confirmation__date}>Friday 1st April 2021</span>
      </p>
      <p className={styles.confirmation__small}>
        <button type="button" className={styles.confirmation__print}>
          Print Recipe
        </button>
      </p>
    </div>
  </>
);

export default ConfirmationLayout;
