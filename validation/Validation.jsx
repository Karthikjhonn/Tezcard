import * as Yup from 'yup';

export const addCardValidation = Yup.object().shape({
  name: Yup.string().required('Cardholder name is required'),
  number: Yup.string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  cvv: Yup.string()
    .required('CVV is required')
    .matches(/^\d{3}$/, 'CVV must be 3 digits'),
  expiry: Yup.string().required('Expiry date is required'),
});