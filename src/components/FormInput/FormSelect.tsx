import { ChangeEvent, FC, SyntheticEvent } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import styles from './FormInput.module.scss';

type Props = {
  field: Partial<FieldInputProps<string>>;
  meta: FieldMetaProps<string>;
  placeholder: string;
  list: string[];
  listVisible: boolean;
  onShow: () => void;
  onBlur: (evt: SyntheticEvent) => void;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  setItem: (evt: SyntheticEvent) => void;
};

const FormSelect: FC<Props> = ({
  field,
  meta,
  placeholder,
  list,
  listVisible,
  onShow,
  onBlur,
  onChange,
  setItem,
}: Props) => (
  <div className={styles.input}>
    {meta.touched && meta.error ? (
      <div className={styles.input__error}>{meta.error}</div>
    ) : null}

    <input
      className={`${styles.input__field} ${
        listVisible
          ? styles.input__field_select_active
          : styles.input__field_select_inactive
      } ${meta.touched && meta.error ? styles.input__field_error : ''}`}
      type="text"
      placeholder={placeholder}
      onFocus={onShow}
      onBlur={onBlur}
      onChange={onChange}
      {...field}
    />

    <ul
      className={`${styles.input__list} ${
        listVisible ? styles.input__list_visible : ''
      }`}
    >
      {list.map((el) => (
        <li key={el}>
          <button
            type="button"
            className={styles.input__item}
            onClick={setItem}
            data-value={el}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default FormSelect;
