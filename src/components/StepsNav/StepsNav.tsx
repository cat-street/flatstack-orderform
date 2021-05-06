import { FC } from 'react';

import { UserState } from '../../types/forms';
import StepsNavButton from '../StepsNavButton/StepsNavButton';
import styles from './StepsNav.module.scss';

type Props = {
  step: number;
  data: UserState;
  setStep: (n: number) => void;
};

const StepsNav: FC<Props> = ({ step, setStep, data }: Props) => (
  <nav className={styles['steps-nav']}>
    <ul className={styles['steps-nav__list']}>
      <li>
        <StepsNavButton
          name="Shipping"
          active={step === 1}
          onClick={() => setStep(1)}
        />
      </li>
      <li className={styles['steps-nav__divider']} />
      <li>
        <StepsNavButton
          name="Billing"
          active={step === 2}
          onClick={() => setStep(2)}
          disabled={!data.shippingValid}
        />
      </li>
      <li className={styles['steps-nav__divider']} />
      <li>
        <StepsNavButton
          name="Payment"
          active={step === 3}
          onClick={() => setStep(3)}
          disabled={!data.billingValid}
        />
      </li>
    </ul>
  </nav>
);

export default StepsNav;
