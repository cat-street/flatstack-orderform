import { FC, ReactNode } from 'react';

import { Form } from 'formik';

import styles from './OrderForm.module.scss';

type Props = {
  submitText: string;
  autoComplete?: string;
  children: ReactNode;
};

const OrderForm: FC<Props> = ({ submitText, autoComplete, children }: Props) => (
  <Form autoComplete={autoComplete}>
    {children}

    <button type="submit" className={styles.form__submit}>
      {submitText}
    </button>
  </Form>
);

OrderForm.defaultProps = {
  autoComplete: 'on',
};

export default OrderForm;
