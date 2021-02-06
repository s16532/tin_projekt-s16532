const Joi = require('joi');

const empSchema = Joi.object({
    id: Joi.number()
        .optional()
        .allow(""),
    lastName: Joi.string()
        .min(2)
        .max(60)
        .required(),
    firstName: Joi.string()
        .min(2)
        .max(60)
        .required(),
    uname: Joi.string()
        .min(2)
        .max(60)
        .required(),
    passwd: Joi.string()
        .max(60)
        .optional()
        .allow(""),
});

module.exports = empSchema;