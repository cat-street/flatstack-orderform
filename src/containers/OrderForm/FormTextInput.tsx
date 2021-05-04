import { FieldHookConfig, useField } from 'formik';

import styles from './Form.module.scss';

type Props = {
  classMixin?: string;
};

const FormTextInput = (props: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { type, placeholder, classMixin } = props;
  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
      <input
        className={`${styles.input__field} ${classMixin && styles[classMixin]}`}
        type={type}
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

FormTextInput.defaultProps = {
  classMixin: '',
};

export default FormTextInput;
