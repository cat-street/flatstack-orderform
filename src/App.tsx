import { ReactElement, useEffect, useState } from 'react';

import Header from './components/Header/Header';
import OrderLayout from './components/OrderLayout/OrderLayout';
import getAddress from './utils/getAddress';
import { AddressState } from './types/app';

function App(): ReactElement {
  const [address, setAddress] = useState<AddressState>();

  const detectAddress = async () => {
    const data = await getAddress();
    if (data) {
      setAddress(data);
    }
  };

  useEffect(() => {
    detectAddress();
  }, []);

  return (
    <>
      <Header />
      <OrderLayout />
    </>
  );
}

export default App;
