const express = require('express');

function agriculturistRoute({
  validationMiddleware,
  agriculturistValidator, 
  agriculturistController
}) {
  const router = express.Router();
  
  router.post('/', 
    validationMiddleware.validate(agriculturistValidator.agriculturistCreateValidator),
    agriculturistController.create,
  );
  

  return router;
}

module.exports = agriculturistRoute;
