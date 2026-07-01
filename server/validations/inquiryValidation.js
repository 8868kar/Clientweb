const Joi = require('joi');

const inquirySchema = Joi.object({
  name: Joi.string().required().min(2).max(100),
  email: Joi.string().email().required(),
  phone: Joi.string().allow('', null),
  enquiryType: Joi.string().valid('book_now', 'membership', 'general').required(),
  destination: Joi.string().allow('', null),
  checkIn: Joi.date().iso().allow('', null),
  checkOut: Joi.date().iso().min(Joi.ref('checkIn')).allow('', null),
  guests: Joi.string().allow('', null),
  message: Joi.string().allow('', null).max(1000)
});

module.exports = { inquirySchema };
