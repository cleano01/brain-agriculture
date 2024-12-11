  function AgriculturistUseCase({agriculturistService}) {

  async function create(data) {
    const agriculturist = await agriculturistService.create(data)
    return;
  };

  return {
    create,
  };
  
};

module.exports = AgriculturistUseCase;