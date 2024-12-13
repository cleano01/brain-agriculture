function AgriculturistController({ agriculturistUseCase, navigator }) {

  async function getReport(req, res, next) {
    try {
      const response = await agriculturistUseCase.getReport();

      const formatResponse = navigator.navigatorReport(response)
      
      return res.send(formatResponse);
    } catch (error) {
      next(error);
    }    
  };
  
  async function create(req, res, next) { 
    try {
      const response = await agriculturistUseCase.create(req.body);

      const formatResponse = navigator.navigatorCreate(response)

      return res.send(formatResponse);
    } catch (error) {
      next(error);
    }     
  };

  async function update(req, res, next) {
    try {
      const id = req.params.id;
      const data = req.body;

      const response = await agriculturistUseCase.update(id, data);
      
      const formatResponse = navigator.navigatorUpdate(response)

      return res.send(formatResponse);
    } catch (error) {
      next(error);
    } 
  };

  async function remove (req, res, next) { 
    try {
      const id = req.params.id;
    
      await agriculturistUseCase.remove(id);

      const formatResponse = navigator.navigatorRemove(id)

      return res.send(formatResponse);
    } catch (error) {
      next(error);
    }    
  };
  
  return {
    getReport,
    create,
    update,
    remove,    
  };    
};

module.exports = AgriculturistController;
