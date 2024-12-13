

function _mapError(error, next) {
  if (error) {
    const menssage = error.details.map(err => err.message).join(', ');
    const err = new Error(menssage);
    err.status = 400;
    return next(err);  
  }
};

module.exports = () => ({
  validateBody: (schema) => {
    return (req, res, next) => {

      const { error } = schema.validate(req.body);      

      _mapError(error, next);

      next();  
    };
  },

  validateParams: (schema) => {
    return (req, res, next) => {     
      const { error } = schema.validate(req.params);
      
      _mapError(error, next);
      
      next();  
    };
  }
});