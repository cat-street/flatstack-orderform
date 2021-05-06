import { FC, ReactNode } from 'react';

import { Form } from 'formik';

import styles from './OrderForm.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

const OrderForm: FC<Props> = ({ title, children }: Props) => (
  <Form>
    <h2 className={styles.form__title}>{title}</h2>

    {children}

    <button type="submit" className={styles.form__submit}>
      Continue
    </button>
  </Form>
);

export default OrderForm;
