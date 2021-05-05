import { FieldHookConfig, useField } from 'formik';

import styles from './Form.module.scss';

type Props = {
  classMixin?: string;
};

const FormSelect = (props: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { children, placeholder, classMixin } = props;
  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
      <select
        className={`${styles.input__field} ${classMixin && styles[classMixin]}`}
        placeholder={placeholder}
        {...field}
      >
        {children}
      </select>
    </div>
  );
};

FormSelect.defaultProps = {
  classMixin: '',
};

export default FormSelect;
