import { useContext } from 'react';
import { FieldHookConfig } from 'formik';

import FormInputCountry from '../../components/FormInput/FormInputCountry';

import GeoContext from '../../context/geoContext';

const CountryInput = (props: FieldHookConfig<string>) => {
  const { setContext } = useContext(GeoContext);

  return <FormInputCountry onDetect={setContext} {...props} />;
};

export default CountryInput;
