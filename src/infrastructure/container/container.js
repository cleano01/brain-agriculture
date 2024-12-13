const { createContainer, asFunction } = require("awilix");

const AgriculturistValidator = require("../../presentation/validators/agriculturistValidator");
const ValidationMiddleware = require("../../presentation/middlewares/validationMiddleware")
const AgriculturistController = require("../../presentation/controllers/agriculturistController");
const AgriculturistRoute = require("../../presentation/routes/agriculturistRoute");
const AgriculturistUseCase = require("../../application/use-cases/agriculturistUseCase");
const AgriculturistService = require("../../application/services/agriculturistService");
const AgriculturistRepository = require("../../infrastructure/repository/agriculturistRepository");
const AgriculturistModel = require("../../infrastructure/database/models/index");

const container = createContainer();

container.register({
  agriculturistValidator: asFunction(AgriculturistValidator).singleton(),
  agriculturistController: asFunction(AgriculturistController).singleton(),
  agriculturistRoute: asFunction(AgriculturistRoute).singleton(),
  agriculturistUseCase: asFunction(AgriculturistUseCase).singleton(),
  agriculturistService: asFunction(AgriculturistService).singleton(),
  agriculturistRepository: asFunction(AgriculturistRepository).singleton(),
  agriculturistModel: asFunction(() => AgriculturistModel).singleton(),
  validationMiddleware: asFunction(ValidationMiddleware),  
});

module.exports = container;
