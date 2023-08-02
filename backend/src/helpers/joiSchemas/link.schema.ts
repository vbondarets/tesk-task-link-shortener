import Joi from 'joi';

const LinkSchema = Joi.object({
    link: Joi.string().uri().required(),
});

export default LinkSchema;