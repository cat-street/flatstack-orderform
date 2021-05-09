import { ChangeEvent } from 'react';
import { FieldHookConfig, useField } from 'formik';

import FormInput from '../../components/FormInput/FormInput';

const FormCardDateInput = (props: FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  const { type, placeholder } = props;
  const { onChange, ...fieldProps } = field;
  const { setValue } = helpers;

  const formatCard = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
    let { value } = evt.target;
    value = value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.match(/.{1,2}/g)!.join(' / ');
    }
    setValue(value);
  };

  return (
    <FormInput
      field={fieldProps}
      meta={meta}
      type={type}
      placeholder={placeholder}
      maxLength={7}
      onChange={formatCard}
    />
  );
};

export default FormCardDateInput;
