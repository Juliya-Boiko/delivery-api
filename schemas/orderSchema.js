const Joi = require('joi');

const orderSchema = Joi.object({
  contacts: Joi.object({
    name: Joi.string().min(4).trim().required(),
    email: Joi.string().email().trim().required(),
    phone: Joi.string().min(10).trim().required(),
    address: Joi.string().min(10).trim().required(),
  }).required(),
  items: Joi.array().items(
    Joi.object({
      _id: Joi.string().trim().required(),
      name: Joi.string().min(4).trim().required(),
      price: Joi.string().min(1).trim().required(),
      amount: Joi.number().min(1).required()
    })
  ).min(1).required()
});

module.exports = orderSchema;