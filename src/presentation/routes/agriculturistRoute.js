const express = require('express');

function agriculturistRoute({
  validationMiddleware,
  agriculturistValidator, 
  agriculturistController
}) {
  const router = express.Router();
  
  router.post('/', 
    validationMiddleware.validateBody(agriculturistValidator.agriculturistValidator),
    agriculturistController.create,
  );
  router.put('/:id', 
    validationMiddleware.validateParams(agriculturistValidator.agriculturistParamIdValidator),
    validationMiddleware.validateBody(agriculturistValidator.agriculturistValidator),
    agriculturistController.update,
  );
  router.delete('/:id', 
    validationMiddleware.validateParams(agriculturistValidator.agriculturistParamIdValidator),
    agriculturistController.remove,
  );
  

  return router;
}

module.exports = agriculturistRoute;
