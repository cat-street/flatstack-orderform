import {
  useState,
  SyntheticEvent,
  ChangeEvent,
  useEffect,
} from 'react';
import { FieldHookConfig, useField } from 'formik';

import FormSelect from '../../components/FormInput/FormSelect';

type Props = {
  list: string[];
};

const FormSelectInput = (props: Props & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  const [currentList, setList] = useState<Array<string>>([]);
  const [listVisible, setListVisible] = useState(false);

  const { list, placeholder } = props;
  const { onChange, onBlur, ...fieldProps } = field;
  const { setValue } = helpers;

  const showList = () => {
    setListVisible(true);
  };

  const hideList = () => {
    setListVisible(false);
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
    <FormSelect
      field={fieldProps}
      meta={meta}
      placeholder={placeholder!}
      list={currentList}
      listVisible={listVisible}
      onShow={showList}
      onBlur={handleBlur}
      onChange={handleChange}
      setItem={setItem}
    />
  );
};

export default FormSelectInput;
