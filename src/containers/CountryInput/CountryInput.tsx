import { useContext } from 'react';
import { FieldHookConfig } from 'formik';

import FormInputCity from '../../components/FormInput/FormInputCity';

import GeoContext from '../../context/geoContext';

const CountryInput = (props: FieldHookConfig<string>) => {
  const { setContext } = useContext(GeoContext);

  return <FormInputCity onDetect={setContext} {...props} />;
};

export default CountryInput;
