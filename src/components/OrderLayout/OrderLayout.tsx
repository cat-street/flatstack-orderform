import { FC } from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import OrderFormContainer from '../../containers/OrderFormContainer/OrderFormContainer';
import OrderSummary from '../../containers/OrderSummary/OrderSummary';

import styles from './OrderLayout.module.scss';

const OrderLayout: FC = () => (
  <ContentWrapper>
    <main className={styles.order}>
      <OrderFormContainer />
      <OrderSummary />
    </main>
  </ContentWrapper>
);

export default OrderLayout;
