import { FieldHookConfig, useField } from 'formik';
import { ChangeEvent, useRef } from 'react';

import styles from './FormInput.module.scss';

const FormInputCard = (props: FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  const { type, placeholder } = props;
  const { value } = meta;
  const { onChange, ...fieldProps } = field;
  const { setValue } = helpers;

  const input = useRef<HTMLInputElement>(null);

  const formatCard = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
    let currentValue = evt.target.value;
    if (currentValue.length > 4) {
      currentValue = currentValue
        .replace(/\D/g, '')
        .match(/.{1,4}/g)!
        .join(' ');
    }
    setValue(currentValue);
  };

  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}

      <input
        className={`${styles.input__field}
          ${value[0] === '4' ? styles.input__field_visa : ''}
          ${meta.touched && meta.error ? styles.input__field_error : ''}`}
        type={type}
        placeholder={placeholder}
        onChange={formatCard}
        maxLength={19}
        ref={input}
        {...fieldProps}
      />
    </div>
  );
};

export default FormInputCard;
