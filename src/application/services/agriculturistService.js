function AgriculturistService({ agriculturistRepository }) {

  async function create(data) {
    const hasAgriculturistWithCpf = await data.cpf && await findByCPF(data.cpf);

    if(hasAgriculturistWithCpf) {
      const error = new Error('cannot register an agriculturist with an existing CPF'); 
        error.status = 422;
        throw error;
    };
    
    const hasAgriculturistWithCnpj = await data.cnpj && await findByCnpj(data.cnpj);

    if(hasAgriculturistWithCnpj) {
      const error = new Error('cannot register an agriculturist with an existing CNPJ'); 
      error.status = 422;
      throw error;
    };

    const agriculturist = await agriculturistRepository.create(data);
    
    return agriculturist;
  };

  async function findByCPF(cpf) {
    if(!cpf) return;
    return await agriculturistRepository.findByCPF(cpf);
  }

  async function findByCnpj(cnpj) {
    if(!cnpj) return;

    return await agriculturistRepository.findByCnpj(cnpj);
  }

  async function update(id, data) {
    const agriculturist = await findById(id);

    if(!agriculturist) {
      const error = new Error('cannot find an agriculturist with the passed ID'); 
        error.status = 404;
        throw error;
    };  
    
    const agriculturistUpdated = await agriculturistRepository.updateById(id, data);
    
    return agriculturistUpdated 
  };
  
  async function findById(id) {
    if(!id) return;

    return await agriculturistRepository.findById(id);
  };

  async function deleteById(id) {
    const hasAgriculturist = await findById(id);

    if(!hasAgriculturist){
      const error = new Error('cannot find an agriculturist with the passed ID'); 
      error.status = 404;
      throw error;
    }
    
    return await agriculturistRepository.deleteById(id);
  };

  return {
    create,  
    findByCPF, 
    findByCnpj,
    update,
    findById,
    deleteById,
  };
};

module.exports = AgriculturistService;