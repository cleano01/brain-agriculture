
module.exports = () => ({
  validate: (schema) => {
    return (req, res, next) => {
      let _error;
      
      if (Object.keys(req.body).length > 0) {
        const { error } = schema.validate(req.body);
        _error = error;
      }

      if (Object.keys(req.params).length > 0) {
        const { error } = schema.validate(req.params);
        _error = error;
      }
      if (_error) {
        const menssage = _error .details.map(err => err.message).join(', ');

        const err = new Error(menssage);
        err.status = 400;
        return next(err);  
      }
      next();  
    };
  }
});