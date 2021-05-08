import { FieldHookConfig, useField } from 'formik';
import FormInput from '../../components/FormInput/FormInput';

type Props = {
  maxLength?: number;
};

const FormTextInput = (props: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { type, placeholder, maxLength } = props;

  return (
    <FormInput
      field={field}
      meta={meta}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

FormTextInput.defaultProps = {
  maxLength: undefined,
};

export default FormTextInput;
