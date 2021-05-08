import { FC } from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import FormContainer from '../../containers/FormContainer/FormContainer';
import OrderSummaryContainer from '../../containers/OrderSummaryContainer/OrderSummaryContainer';

import styles from './OrderLayout.module.scss';

const OrderLayout: FC = () => (
  <ContentWrapper>
    <main className={styles.order}>
      <FormContainer />
      <OrderSummaryContainer />
    </main>
  </ContentWrapper>
);

export default OrderLayout;
