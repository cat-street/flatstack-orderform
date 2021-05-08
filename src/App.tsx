import { ReactElement, useEffect, useState } from 'react';

import GeoContext from './context/geoContext';
import { mockCart, CartContext } from './context/cartContext';

import Header from './components/Header/Header';
import OrderLayout from './components/OrderLayout/OrderLayout';
import getAddress from './utils/getAddress';

function App(): ReactElement {
  const [address, setAddress] = useState({
    city: '',
    country: '',
    postcode: '',
  });

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
      <GeoContext.Provider value={{ address, setContext: detectAddress }}>
        <CartContext.Provider value={mockCart}>
          <OrderLayout />
        </CartContext.Provider>
      </GeoContext.Provider>
    </>
  );
}

export default App;
