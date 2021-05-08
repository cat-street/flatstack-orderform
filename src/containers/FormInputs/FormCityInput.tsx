import { useContext } from 'react';
import { FieldHookConfig, useField } from 'formik';

import CityTargetButton from '../../components/CityTargetButton/CityTargetButton';
import FormInput from '../../components/FormInput/FormInput';

import GeoContext from '../../context/geoContext';

const FormCityInput = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { type, placeholder } = props;
  const { setContext } = useContext(GeoContext);

  const button = <CityTargetButton onDetect={setContext} />;

  return (
    <FormInput
      field={field}
      meta={meta}
      type={type}
      placeholder={placeholder}
      classMixin="city"
      button={button}
    />
  );
};

export default FormCityInput;
