import * as yup from 'yup';

export const orderItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().nullable(),
  price: yup.number().integer().nullable(),
  order_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
