import React from 'react';

import imageBoot from '../assets/item_boot.png';
import imageBackpack from '../assets/item_backpack.png';
import imageBag from '../assets/item_bag.png';

const mockCart = {
  items: [
    {
      id: '001',
      name: 'The Chelsea Boot',
      variant: 'Black',
      quantity: 1,
      price: 235,
      pic: imageBoot,
    },
    {
      id: '002',
      name: 'The Twill Snap Backpack',
      variant: 'Reverse Denim + Brown leather',
      quantity: 1,
      price: 65,
      pic: imageBackpack,
    },
    {
      id: '003',
      name: 'The Twill Zip Tote',
      variant: 'Reverse Denim + Black leather',
      quantity: 1,
      price: 48,
      pic: imageBag,
    },
  ],
  subtotal: 398,
  tax: 12.12,
};

const CartContext = React.createContext(mockCart);

export { mockCart, CartContext };
