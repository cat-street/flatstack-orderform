import { FieldHookConfig, useField } from 'formik';
import { ChangeEvent } from 'react';

import styles from './FormInput.module.scss';

const FormInputCardDate = (props: FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  const { type, placeholder } = props;
  const { onChange, ...fieldProps } = field;
  const { setValue } = helpers;

  const formatCard = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
    let { value } = evt.target;
    if (value.length > 2) {
      value = value.replace(/\D/g, '').match(/.{1,2}/g)!.join(' / ');
    }
    setValue(value);
  };

  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}

      <input
        className={`${styles.input__field}
          ${meta.touched && meta.error ? styles.input__field_error : ''}`}
        type={type}
        placeholder={placeholder}
        onChange={formatCard}
        maxLength={7}
        {...fieldProps}
      />
    </div>
  );
};

export default FormInputCardDate;
