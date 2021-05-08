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
    if (value.length > 2) {
      value = value.replace(/\D/g, '').match(/.{1,2}/g)!.join(' / ');
    }
    setValue(value);
  };

  return (
    <FormInput
      field={fieldProps}
      meta={meta}
      type={type}
      placeholder={placeholder}
      maxlength={7}
      onChange={formatCard}
    />
  );
};

export default FormCardDateInput;
