import {
  useRef,
  useState,
  SyntheticEvent,
  ChangeEvent,
  useEffect,
} from 'react';
import { FieldHookConfig, useField } from 'formik';

import styles from './FormInput.module.scss';

type Props = {
  classMixin?: string;
  list: string[];
};

const FormInputSelect = (props: Props & FieldHookConfig<string>) => {
  const { list, placeholder, classMixin } = props;
  const [field, meta, helpers] = useField(props);
  const { onChange, onBlur, ...fieldProps } = field;
  const { setValue } = helpers;
  const listEl = useRef<HTMLUListElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);
  const [currentList, setList] = useState<Array<string>>([]);

  const showList = () => {
    listEl.current?.classList.add(styles.input__list_visible);
    inputEl.current?.classList.remove(styles.input__field_select);
    inputEl.current?.classList.add(styles['input__field_select-on']);
  };

  const hideList = () => {
    listEl.current?.classList.remove(styles.input__list_visible);
    inputEl.current?.classList.remove(styles['input__field_select-on']);
    inputEl.current?.classList.add(styles.input__field_select);
  };

  const setItem = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLLIElement;
    setValue(target.dataset.value!);
    hideList();
  };

  const handleBlur = (evt: SyntheticEvent) => {
    hideList();
    onBlur(evt);
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setList(
      list.filter(
        (el) => el.toLowerCase().startsWith(evt.target.value.toLowerCase()),
      ),
    );
    onChange(evt);
  };

  useEffect(() => {
    setList(list);
  }, [list]);

  return (
    <div className={styles.input}>
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
      <input
        className={`${styles.input__field} ${
          classMixin && styles[classMixin]
        } ${meta.error ? styles.input__field_error : null}`}
        type="text"
        placeholder={placeholder}
        onFocus={showList}
        onBlur={handleBlur}
        onChange={handleChange}
        ref={inputEl}
        {...fieldProps}
      />

      <ul className={styles.input__list} ref={listEl}>
        {currentList.map((el) => (
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
};

FormInputSelect.defaultProps = {
  classMixin: '',
};

export default FormInputSelect;
