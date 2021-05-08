import { FC, useContext } from 'react';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

import { CartContext } from '../../context/cartContext';

const OrderSummaryContainer: FC = () => {
  const mockCart = useContext(CartContext);

  return <OrderSummary data={mockCart} />;
};

export default OrderSummaryContainer;
