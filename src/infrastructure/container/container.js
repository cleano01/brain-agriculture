const { createContainer, asFunction } = require("awilix");

const AgriculturistValidator = require("../../presentation/validators/agriculturistValidator");
const ValidationMiddleware = require("../../presentation/middlewares/validationMiddleware")
const AgriculturistController = require("../../presentation/controllers/agriculturistController");
const AgriculturistRoute = require("../../presentation/routes/agriculturistRoute");
const AgriculturistUseCase = require("../../application/use-cases/agriculturistUseCase");
const AgriculturistService = require("../../application/services/agriculturistService");


const container = createContainer();

container.register({
  agriculturistValidator: asFunction(AgriculturistValidator).singleton(),
  agriculturistController: asFunction(AgriculturistController).singleton(),
  agriculturistRoute: asFunction(AgriculturistRoute).singleton(),
  agriculturistUseCase: asFunction(AgriculturistUseCase).singleton(),
  agriculturistService: asFunction(AgriculturistService).singleton(),

  validationMiddleware: asFunction(ValidationMiddleware)
});

module.exports = container;
