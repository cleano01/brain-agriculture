
function AgriculturistRepository({ agriculturistModel }) {
  const { Agriculturist } = agriculturistModel;

  async function create(data) {    
    return await Agriculturist.create({
      cpf: data.cpf,
      cnpj: data.cnpj,
      producerName: data.producerName,
      farmName: data.farmName,
      city: data.city,
      state: data.state,
      totalArea: data.totalArea,
      arableArea: data.arableArea,
      vegetationArea: data.vegetationArea,
      plantedCrops: data.plantedCrops,
    });
  };

  async function findByCPF(cpf) {
    return await Agriculturist.findOne({
      where: { cpf }
    });
  };

  async function findByCnpj(cnpj){
    return await Agriculturist.findOne({
      where: { cnpj }
    });
  };

  async function findById(id){
    return await Agriculturist.findOne({
      where: { id }
    });
  };

  async function updateById(id, data) {
    
    return await Agriculturist.update(
      {
        //cpf: data.cpf,
        //cnpj: data.cnpj,
        producerName: data.producerName,
        farmName: data.farmName,
        city: data.city,
        state: data.state,
        totalArea: data.totalArea,
        arableArea: data.arableArea,
        vegetationArea: data.vegetationArea,
        plantedCrops: data.plantedCrops,
      }, {
      where: { id },
    });    
  };

  async function deleteById(id) {
    return await Agriculturist.destroy({
      where: { id },
    });
  };

  return {
    create,
    findByCPF,
    findByCnpj,
    findById,
    updateById,
    deleteById
  };
};

module.exports = AgriculturistRepository;