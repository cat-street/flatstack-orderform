import { FieldHookConfig, useField } from 'formik';

import styles from './FormInput.module.scss';

type Props = {
  classMixin?: string;
};

const FormInputText = (props: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { type, placeholder, classMixin } = props;

  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
      <input
        className={`${styles.input__field} ${
          classMixin && styles[classMixin]
        } ${meta.error ? styles.input__field_error : null}`}
        type={type}
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

FormInputText.defaultProps = {
  classMixin: '',
};

export default FormInputText;
