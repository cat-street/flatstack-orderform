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
    if (currentValue.length > 0) {
      currentValue = currentValue
        .replace(/\D/g, '')
        .match(/.{1,4}/g)!
        .join(' ');
    }
    setValue(currentValue);
  };

  return (
    <FormInput
      field={fieldProps}
      meta={meta}
      type={type}
      placeholder={placeholder}
      maxlength={19}
      classMixin={value[0] === '4' ? 'visa' : undefined}
      onChange={formatCard}
    />
  );
};

export default FormCardInput;
