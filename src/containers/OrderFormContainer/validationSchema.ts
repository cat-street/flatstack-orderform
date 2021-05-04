import * as Yup from 'yup';
import luhn from 'fast-luhn';

import countryList from '../../utils/countryList';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object({
  fullName: Yup.string().required("Please enter recipient's full name"),
  yourFullName: Yup.string().required('Please enter your name'),
  cardName: Yup.string().required('Please enter the name from the card'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Please enter recipient's phone"),
  address1: Yup.string().required('Address is required'),
  address2: Yup.string(),
  city: Yup.string().required('City is required'),
  country: Yup.string().oneOf(countryList).required('Country is required'),
  zip: Yup.string()
    .matches(/^[0-9A-Za-z-]{4,10}$/, 'Not a valid Zip code')
    .required('Zip code is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),
  card: Yup.string()
    .test('test-card', 'Card number is invalid',
      (value) => luhn(value as string))
    .required('Card number is required'),
  cardDate: Yup.string().required('Card expire date is required'),
  cvv: Yup.string()
    .matches(/^[0-9]{3}$/, 'Not a valid CVV')
    .required('CVV is required'),
});
