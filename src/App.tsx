import { ReactElement, useEffect, useState } from 'react';

import GeoContext from './context/geoContext';

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
        <OrderLayout />
      </GeoContext.Provider>
    </>
  );
}

export default App;
