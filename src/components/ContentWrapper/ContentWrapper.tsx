import { FC, ReactNode } from 'react';
import styles from './ContentWrapper.module.scss';

type Props = {
  children: ReactNode,
};

const ContentWrapper: FC<Props> = ({ children }: Props) => (
  <div className={styles['content-wrapper']}>{children}</div>
);

export default ContentWrapper;
