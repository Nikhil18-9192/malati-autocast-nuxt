import Joi from 'joi'

const formValidation = (data) => {
  const formSchema = Joi.object({
    name: Joi.string().min(3).max(50).label('Name').required(),
    company: Joi.string().min(3).max(50).label('company').required(),
    mobile: Joi.number().min(10).label('Mobile Number').required(),
    email: Joi.string().label('Email').required(),
  }).required()

  return formSchema.validate(data)
}

export { formValidation }
