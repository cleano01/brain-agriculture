const express = require('express');
const agriculturisRoute = require('../../presentation/routes/agriculturistRoute')

function createServer(container) {
  
  const app = express();
  
  app.use(express.json());

  app.use('/agriculturists', agriculturisRoute(container));

  app.use((err, req, res, next) => {
    if (err !== 500) {
      console.error(err)
      res.status(err.status).json({
        error: {
          message: err.message || 'Unprocessable Entity'
        }
      });
    } else {
      console.error(err.stack); 
      res.status(500).json({
        error: {
          message: 'Internal Server Error'
        }
      });
    }
  });

  return app;
}

module.exports = createServer;

