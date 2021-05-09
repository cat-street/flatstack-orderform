import * as Yup from 'yup';

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
  postcode: Yup.string()
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
  postcode: Yup.string()
    .matches(/^\w{3,8}(( |-)?\w{3,4})?$/, 'Not a valid Zip code')
    .required('Zip code is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),
});

const paymentSchema = Yup.object({
  ccname: Yup.string().required('Please enter the name from the card'),
  cardnumber: Yup.string()
    .matches(/^([0-9]{4} ){3}[0-9]{4}$/, 'Card number is invalid')
    .required('Card number is required'),
  'cc-exp': Yup.string()
    .matches(/^[0-1][0-9] \/ 2[1-9]$/, 'Date is invalid')
    .required('Date is required'),
  cvc: Yup.string()
    .matches(/^[0-9]{3}$/, 'Not a valid CVV')
    .required('CVV is required'),
});

export { shippingSchema, billingSchema, paymentSchema };
