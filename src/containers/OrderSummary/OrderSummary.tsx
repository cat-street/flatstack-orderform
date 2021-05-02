import { FC } from 'react';

import styles from './OrderSummary.module.scss';

import imageBoot from '../../assets/item_boot.png';
import imageBackpack from '../../assets/item_backpack.png';
import imageBag from '../../assets/item_bag.png';

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

const OrderSummary: FC = () => (
  <div className={styles.summary}>
    <header className={styles.summary__header}>
      <h2 className={styles.summary__title}>Order Summary</h2>
      <button type="button" className={styles['summary__edit-button']}>
        edit order
      </button>
    </header>
    <ul className={styles.summary__items}>
      {mockCart.items.map((el) => (
        <li className={styles.summary__item} key={el.id}>
          <img
            src={el.pic}
            alt={el.name}
            className={styles['summary__item-image']}
          />
          <div className={styles['summary__item-info']}>
            <h3 className={styles['summary__item-name']}>{el.name}</h3>
            <p>{el.variant}</p>
            <p>Quantity: {el.quantity}</p>
          </div>
          <span className={styles['summary__item-price']}>${el.price}</span>
        </li>
      ))}
    </ul>
    <ul className={styles.summary__subtotal}>
      <li>
        Subtotal
        <span>$ {mockCart.subtotal}</span>
      </li>
      <li>
        Shipping
        <span>Free</span>
      </li>
      <li>
        Taxes
        <span>$ {mockCart.tax}</span>
      </li>
    </ul>
    <p className={styles.summary__total}>
      Total
      <span>${mockCart.subtotal + mockCart.tax}</span>
    </p>
    <p className={styles.summary__legal}>
      <small>
        All purchases are subject to our{' '}
        <button type="button" className={styles['summary__legal-link']}>
          Terms and Conditions
        </button>
        .
      </small>
    </p>
  </div>
);

export default OrderSummary;
