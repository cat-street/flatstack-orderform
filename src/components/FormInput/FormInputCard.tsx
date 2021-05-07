import { ChangeEvent } from 'react';
import { FieldHookConfig, useField } from 'formik';

import styles from './FormInput.module.scss';

const FormInputCard = (props: FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  const { placeholder } = props;
  const { onChange, ...fieldProps } = field;
  const { setValue } = helpers;

  const formatValue = (evt: ChangeEvent) => {
    onChange(evt);
    const { value } = evt.target as HTMLInputElement;
    if (value.length > 4) {
      let formattedValue = '';
      for (let i = 0; i < value.length - 1; i += 4) {
        formattedValue += `${value.substr(i, 4)} `;
      }
      console.log(formattedValue);
      setValue(formattedValue);
    }
  };

  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
      <input
        className={`${styles.input__field}
          ${meta.error ? styles.input__field_error : null}`}
        type="text"
        placeholder={placeholder}
        onChange={formatValue}
        {...fieldProps}
      />
    </div>
  );
};

export default FormInputCard;
