import React from 'react';

const Context = React.createContext({
  address: {
    city: '',
    country: '',
    postcode: '',
  },
  setContext: () => {},
});

export default Context;
