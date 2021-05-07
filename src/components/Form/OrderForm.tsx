import { FC, ReactNode } from 'react';

import { Form } from 'formik';

import styles from './OrderForm.module.scss';

type Props = {
  submitText: string;
  children: ReactNode;
};

const OrderForm: FC<Props> = ({ submitText, children }: Props) => (
  <Form>
    {children}

    <button type="submit" className={styles.form__submit}>
      {submitText}
    </button>
  </Form>
);

export default OrderForm;
