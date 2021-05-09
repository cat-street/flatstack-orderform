import { ChangeEvent } from 'react';
import { FieldHookConfig, useField } from 'formik';

import FormInput from '../../components/FormInput/FormInput';

const FormCardInput = (props: FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  const { type, placeholder } = props;
  const { onChange, ...fieldProps } = field;
  const { value } = meta;
  const { setValue } = helpers;

  const formatCard = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
    let currentValue = evt.target.value;
    currentValue = currentValue.replace(/\D/g, '');
    if (currentValue.length > 4) {
      currentValue = currentValue.match(/.{1,4}/g)!.join(' ');
    }
    setValue(currentValue);
  };

  return (
    <FormInput
      field={fieldProps}
      meta={meta}
      type={type}
      placeholder={placeholder}
      maxLength={19}
      classMixin={value && value[0] === '4' ? 'visa' : undefined}
      onChange={formatCard}
    />
  );
};

export default FormCardInput;
