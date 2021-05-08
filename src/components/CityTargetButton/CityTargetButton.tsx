import { FC } from 'react';

import targetIcon from '../../assets/target_icon.svg';
import styles from './CityTargetButton.module.scss';

type Props = {
  onDetect: () => void;
};

const CityTargetButton: FC<Props> = ({ onDetect }: Props) => (
  <button type="button" className={styles.target} onClick={onDetect}>
    <img
      src={targetIcon}
      alt="Detect location button"
    />
  </button>
);

export default CityTargetButton;
