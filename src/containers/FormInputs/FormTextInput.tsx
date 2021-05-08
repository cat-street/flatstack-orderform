import { FieldHookConfig, useField } from 'formik';
import FormInput from '../../components/FormInput/FormInput';

const FormTextInput = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { type, placeholder } = props;

  return (
    <FormInput
      field={field}
      meta={meta}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default FormTextInput;
