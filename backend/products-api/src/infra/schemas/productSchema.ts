import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(1).required().messages({
    'string.min': '"Name" length must be at least 1 characters long',
    'string.base': '"Name" should be a string',
    'any.required': '"Name" is required',
  }),
  brand: Joi.string().min(1).required().messages({
    'string.min': '"Brand" length must be at least 1 characters long',
    'string.base': '"Brand" should be a string',
    'any.required': '"Brand" is required',
  }),
  model: Joi.string().min(1).required().messages({
    'string.min': '"Model" length must be at least 1 characters long',
    'string.base': '"Model" should be a string',
    'any.required': '"Model" is required',
  }),
  price: Joi.number().min(100).required().messages({
    'number.min': '"Price" must be at least 100',
    'number.base': '"Price" should be a number',
    'any.required': '"Price" is required',
  }),
  color: Joi.string().min(3).required().messages({
    'string.min': '"Color" length must be at least 3 characters long',
    'string.base': '"Color" should be a string',
    'any.required': '"Color" is required',
  }),
});
