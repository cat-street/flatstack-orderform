import { FC, ReactNode } from 'react';

import { Form } from 'formik';

import styles from './OrderForm.module.scss';

type Props = {
  children: ReactNode;
};

const OrderForm: FC<Props> = ({ children }: Props) => (
  <Form>
    {children}

    <button type="submit" className={styles.form__submit}>
      Continue
    </button>
  </Form>
);

export default OrderForm;
