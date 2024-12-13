  function AgriculturistUseCase({ agriculturistService }) {

  async function getReport(data) {
    const agriculturist = await agriculturistService.getReport(data);
  
    return agriculturist;
  };

  async function create(data) {
    const agriculturist = await agriculturistService.create(data);

    return agriculturist;
  };

  async function update(id, data) {
    const agriculturist = await agriculturistService.update(id, data);

    return agriculturist;
  }; 

  async function remove(id) {
    const agriculturist = await agriculturistService.deleteById(id);

    return agriculturist;
  };

  return {
    getReport,
    create,
    update,
    remove,
  };
  
};

module.exports = AgriculturistUseCase;