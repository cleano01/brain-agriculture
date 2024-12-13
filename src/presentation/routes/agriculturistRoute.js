const express = require('express');

function agriculturistRoute({
  validationMiddleware,
  agriculturistValidator, 
  agriculturistController
}) {
  const router = express.Router();
  
  router.post('/', 
    validationMiddleware.validate(agriculturistValidator.agriculturistValidator),
    agriculturistController.create,
  );
  router.put('/:id', 
    validationMiddleware.validate(agriculturistValidator.agriculturistParamIdValidator),
    //validationMiddleware.validate(agriculturistValidator.agriculturistValidator),
    agriculturistController.update,
  );
  router.delete('/:id', 
    validationMiddleware.validate(agriculturistValidator.agriculturistParamIdValidator),
    agriculturistController.remove,
  );
  

  return router;
}

module.exports = agriculturistRoute;
