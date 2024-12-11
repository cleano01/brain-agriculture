module.exports = () => ({
  validate: (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (error) {
        const menssage = error.details.map(err => err.message).join(', ');

        const err = new Error(menssage);
        err.status = 400;
        return next(err);  
      }
      next();  
    };
  }
});
