import Joi from 'joi'
const phoneExp = /^[789]\d{9}$/
const formValidation = (data) => {
  const formSchema = Joi.object({
    name: Joi.string().min(3).max(50).label('Name').required(),
    company: Joi.string().min(3).max(50).label('Company').required(),
    mobile: Joi.string()
      .min(10)
      .label('Mobile Number')
      .required()
      .pattern(phoneExp),
    email: Joi.string().label('Email').required().email({
      tlds: false,
    }),
  }).required()

  return formSchema.validate(data)
}

export { formValidation }
