import { FC } from 'react';

import styles from './StepsNav.module.scss';

const StepsNav: FC = () => (
  <nav className={styles['steps-nav']}>
    <ul className={styles['steps-nav__list']}>
      <li>
        <button
          className={`${styles['steps-nav__link']} ${styles['steps-nav__link_active']} ${styles['steps-nav__link_normal']}`}
          type="button"
        >
          Shipping
        </button>
      </li>
      <li className={styles['steps-nav__divider']} />
      <li>
        <button
          type="button"
          className={`${styles['steps-nav__link']} ${styles['steps-nav__link_disabled']}`}
        >
          Billing
        </button>
      </li>
      <li className={styles['steps-nav__divider']} />
      <li>
        <button
          type="button"
          className={`${styles['steps-nav__link']} ${styles['steps-nav__link_disabled']}`}
        >
          Payment
        </button>
      </li>
    </ul>
  </nav>
);

export default StepsNav;
