import { FC, ChangeEvent } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import styles from './FormInput.module.scss';

type Props = {
  field: Partial<FieldInputProps<string>>;
  meta: FieldMetaProps<string>;
  type?: string;
  placeholder?: string;
  maxlength?: number;
  classMixin?: string;
  button?: JSX.Element;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: FC<Props> = ({
  field,
  meta,
  type,
  placeholder,
  maxlength,
  classMixin,
  button,
  onChange,
}: Props) => (
  <div className={styles.input}>
    {button || null}

    {meta.touched && meta.error ? (
      <div className={styles.input__error}>{meta.error}</div>
    ) : null}

    <input
      className={`${styles.input__field} ${
        classMixin ? styles[`input__field_${classMixin}`] : ''
      } ${meta.touched && meta.error ? styles.input__field_error : ''}`}
      type={type}
      placeholder={placeholder}
      maxLength={maxlength}
      onChange={onChange}
      {...field}
    />
  </div>
);

FormInput.defaultProps = {
  type: 'text',
  placeholder: '',
  maxlength: 100,
  classMixin: undefined,
  button: undefined,
  onChange: undefined,
};

export default FormInput;
