import { FC } from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import FormContainer from '../../containers/FormContainer/FormContainer';
import OrderSummary from '../OrderSummary/OrderSummary';

import styles from './OrderLayout.module.scss';

const OrderLayout: FC = () => (
  <ContentWrapper>
    <main className={styles.order}>
      <FormContainer />
      <OrderSummary />
    </main>
  </ContentWrapper>
);

export default OrderLayout;
