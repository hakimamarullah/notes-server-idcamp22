const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
<<<<<<< HEAD
  fullname: Joi.string().required(),
=======
  fullName: Joi.string().required(),
>>>>>>> 5e2e413b5de2072badc950ebe8638c85955c7180
});

module.exports = { UserPayloadSchema };
