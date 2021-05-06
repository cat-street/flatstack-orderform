import { FC, ReactNode } from 'react';

import styles from './FormLayout.module.scss';

type Props = {
  children: ReactNode,
};

const FormLayout: FC<Props> = ({ children }: Props) => (
  <div className={styles['form-container']}>{children}</div>
);

export default FormLayout;
