const express = require('express');
const vehicleValidate = require('../validators/vehicleVaidator');

function brainRoutes({  }) {
  const router = express.Router();

  router.post('/'); 

  return router;
}

module.exports = vehicleRoutes;