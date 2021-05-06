import { FC } from 'react';

import styles from './StepsNavButton.module.scss';

type Props = {
  name: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const StepsNavButton: FC<Props> = ({
  name,
  active,
  disabled,
  onClick,
}: Props) => (
  <button
    className={`${styles['steps-nav__link']}
      ${active ? styles['steps-nav__link_active'] : null}
      ${
        disabled
          ? styles['steps-nav__link_disabled']
          : styles['steps-nav__link_normal']
      }`}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {name}
  </button>
);

StepsNavButton.defaultProps = {
  disabled: false,
};

export default StepsNavButton;
