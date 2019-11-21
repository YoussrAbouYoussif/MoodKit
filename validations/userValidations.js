const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string()
        .required()
        .max(50),
      gender: Joi.string()
        .required()
        .max(6),
      password: Joi.string()
        .min(8)
        .required()
        .max(50),
      email: Joi.string()
        .required()
        .email()
        .max(20)
    }

    return Joi.validate(request, createSchema)
  },

  updateValidation: request => {
    const updateSchema = {
      name: Joi.string().max(50),
      gender: Joi.string().max(6),
      password: Joi.string()
        .min(8)
        .max(50),
      email: Joi.string()
        .email()
        .max(20)
    }

    return Joi.validate(request, updateSchema)
  }
}
