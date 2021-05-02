import { ReactElement } from 'react';
import Header from './components/Header/Header';
import OrderLayout from './components/OrderLayout/OrderLayout';

function App(): ReactElement {
  return (
    <>
      <Header />
      <OrderLayout />
    </>
  );
}

export default App;
