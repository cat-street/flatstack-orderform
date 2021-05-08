import { FieldHookConfig, useField } from 'formik';

import targetIcon from '../../assets/target_icon.svg';
import styles from './FormInput.module.scss';

type Props = {
  onDetect: () => void;
};

const FormInputCity = (props: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { type, placeholder, onDetect } = props;

  return (
    <div className={styles.input}>
      <button type="button" className={styles.input__detect} onClick={onDetect}>
        <img
          src={targetIcon}
          className={styles['input__detect-icon']}
          alt="Detect location button"
        />
      </button>

      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}

      <input
        className={`${styles.input__field} ${styles.input__field_city}
          ${meta.touched && meta.error ? styles.input__field_error : ''}`}
        type={type}
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

export default FormInputCity;
