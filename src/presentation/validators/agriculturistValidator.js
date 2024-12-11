const Joi = require("joi");

module.exports = () => ({
  agriculturistCreateValidator: Joi.object({
    cpf: Joi.string()
      .pattern(/^\d{11}$/)
      .optional(),
    cnpj: Joi.string()
      .pattern(/^\d{14}$/)
      .optional(),
    producerName: Joi.string().min(3).max(100).required(),
    farmName: Joi.string().min(3).max(100).required(),
    city: Joi.string().min(2).max(100).required(),
    state: Joi.string()
      .length(2)
      .uppercase()
      .required(),
    totalArea: Joi.number().positive().required(),
    arableArea: Joi.number()
      .positive()
      .max(Joi.ref("totalArea"))
      .required(),
    vegetationArea: Joi.number()
      .positive()
      .max(Joi.ref("totalArea"))
      .required(),
    plantedCrops: Joi.array()
      .items(
        Joi.string().valid("Soybean", "Corn", "Cotton", "Coffee", "Sugarcane")
      )
      .min(1)
      .required(),
  }).xor("cpf", "cnpj"),

 
});