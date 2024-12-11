function AgriculturistController({ agriculturistUseCase }) {

  
  async function create(req, res, next) { 
    try {
      const response = await agriculturistUseCase.create(req.body)   
    
      return res.send(response);

    } catch (error) {
      next(error);
    }     
  }

  
  return {
    create,
  }    
}

module.exports = AgriculturistController;
