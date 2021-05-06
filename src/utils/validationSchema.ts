import * as Yup from 'yup';
import luhn from 'fast-luhn';

import countryList from './countryList';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const shippingSchema = Yup.object({
  name: Yup.string().required("Please enter recipient's full name"),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Please enter recipient's phone"),
  address: Yup.string().required('Address is required'),
  address2: Yup.string(),
  city: Yup.string().required('City is required'),
  country: Yup.string()
    .oneOf(countryList, 'Choose a country')
    .required('Country is required'),
  'postal-code': Yup.string()
    .matches(/^\w{3,8}(( |-)?\w{3,4})?$/, 'Not a valid Zip code')
    .required('Zip code is required'),
});

const billingSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  address: Yup.string().required('Address is required'),
  address2: Yup.string(),
  city: Yup.string().required('City is required'),
  country: Yup.string()
    .oneOf(countryList, 'Choose a country')
    .required('Country is required'),
  'postal-code': Yup.string()
    .matches(/^\w{3,8}(( |-)?\w{3,4})?$/, 'Not a valid Zip code')
    .required('Zip code is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),
});

const cardSchema = Yup.object({
  cardName: Yup.string().required('Please enter the name from the card'),
  card: Yup.string()
    .test('test-card', 'Card number is invalid',
      (value) => luhn(value as string))
    .required('Card number is required'),
  cardDate: Yup.string().required('Card expire date is required'),
  cvv: Yup.string()
    .matches(/^[0-9]{3}$/, 'Not a valid CVV')
    .required('CVV is required'),
});

export { shippingSchema, billingSchema, cardSchema };
