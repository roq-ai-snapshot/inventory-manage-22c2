import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  total_amount: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  business_id: yup.string().nullable().required(),
});
