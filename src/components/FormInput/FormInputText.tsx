import { FieldHookConfig, useField } from 'formik';

import styles from './FormInput.module.scss';

const FormInputText = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { type, placeholder } = props;

  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
      <input
        className={`${styles.input__field} ${
          meta.touched && meta.error ? styles.input__field_error : ''
        }`}
        type={type}
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

export default FormInputText;
