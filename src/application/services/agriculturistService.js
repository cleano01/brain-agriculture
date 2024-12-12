function AgriculturistService({ agriculturistRepository }) {

  async function create(data) {
    const agriculturist = await agriculturistRepository.create(data);
    return agriculturist;
  };
  
  return {
    create,   
  }
};

module.exports = AgriculturistService;