import { FC } from 'react';

import { Cart } from '../../types/cart';

import styles from './OrderSummary.module.scss';

type Props = {
  data: Cart;
};

const OrderSummary: FC<Props> = ({ data }: Props) => (
  <div className={styles.summary}>
    <header className={styles.summary__header}>
      <h2 className={styles.summary__title}>Order Summary</h2>
      <button type="button" className={styles['summary__edit-button']}>
        edit order
      </button>
    </header>
    <ul className={styles.summary__items}>
      {data.items.map((el) => (
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
        <span>$ {data.subtotal}</span>
      </li>
      <li>
        Shipping
        <span>Free</span>
      </li>
      <li>
        Taxes
        <span>$ {data.tax}</span>
      </li>
    </ul>
    <p className={styles.summary__total}>
      Total
      <span>${data.subtotal + data.tax}</span>
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
