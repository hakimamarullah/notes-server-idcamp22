const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.string().required(),
});

module.exports = { UserPayloadSchema };
