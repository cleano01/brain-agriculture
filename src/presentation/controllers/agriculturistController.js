function AgriculturistController({ agriculturistUseCase }) {

  
  async function create(req, res, next) { 
    try {
      const response = await agriculturistUseCase.create(req.body);

      return res.send(response);
    } catch (error) {
      next(error);
    }     
  };

  async function update(req, res, next) {
    try {
      const id = req.params.id;
      const data = req.body;

      const response = await agriculturistUseCase.update(id, data);
      
      return res.send(response);
    } catch (error) {
      next(error);
    } 
  };

  async function remove (req, res, next) { 
    try {
      const id = req.params.id;
    
      const response = await agriculturistUseCase.remove(id);
      return res.send(response);
    
    } catch (error) {
      next(error);
    }    
  };
  
  return {
    create,
    update,
    remove,
  };    
};

module.exports = AgriculturistController;
