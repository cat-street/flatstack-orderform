import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import targetIcon from '../../assets/target_icon.svg';
import styles from './FormInput.module.scss';

type Props = {
  field: Partial<FieldInputProps<string>>;
  meta: FieldMetaProps<string>;
  placeholder: string;
  type?: string;
  maxlength?: number;
  classMixin?: string;
  onDetect?: () => void;
};

const FormInput: FC<Props> = ({
  field,
  meta,
  type,
  placeholder,
  maxlength,
  classMixin,
  onDetect,
}: Props) => (
  <div className={styles.input}>
    {onDetect && (
      <button type="button" className={styles.input__detect} onClick={onDetect}>
        <img
          src={targetIcon}
          className={styles['input__detect-icon']}
          alt="Detect location button"
        />
      </button>
    )}

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
      {...field}
    />
  </div>
);

FormInput.defaultProps = {
  type: 'text',
  maxlength: 100,
  classMixin: undefined,
  onDetect: undefined,
};

export default FormInput;
