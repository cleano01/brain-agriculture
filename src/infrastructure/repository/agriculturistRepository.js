
function AgriculturistRepository({ agriculturistModel }) {
  const { Agriculturist } = agriculturistModel;

  async function getReport() {
    const reportQuery = `
      SELECT 
          'total_farms' AS metric,
          COUNT(*) AS value
      FROM 
          "Agriculturists"

      UNION ALL

      SELECT 
          'total_area' AS metric,
          SUM("totalArea") AS value
      FROM 
          "Agriculturists"

      UNION ALL

      SELECT 
          'farms_by_state' || ':' || "state" AS metric,
          COUNT(*) AS value
      FROM 
          "Agriculturists"
      GROUP BY 
          "state"

      UNION ALL

      SELECT 
          'farms_by_culture' || ':' || UNNEST("plantedCrops") AS metric,
          COUNT(*) AS value
      FROM 
          "Agriculturists"
      GROUP BY 
          UNNEST("plantedCrops")

      UNION ALL

      SELECT 
          'land_usage:arable_area' AS metric,
          SUM("arableArea") AS value
      FROM 
          "Agriculturists"

      UNION ALL

      SELECT 
          'land_usage:vegetation_area' AS metric,
          SUM("vegetationArea") AS value
      FROM 
          "Agriculturists";
    `;  

    const report = await agriculturistModel.sequelize.query(reportQuery, {
      type: agriculturistModel.sequelize.QueryTypes.SELECT
    });

    return report;
  };


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
      where: { cpf },
      raw: true
    });
  };

  async function findByCnpj(cnpj) {
    return await Agriculturist.findOne({
      where: { cnpj },
      raw: true
    });
  };

  async function findById(id) {
    return await Agriculturist.findOne({
      where: { id },
      raw: true
    });
  };

  async function updateById(id, data) {
    
    return await Agriculturist.update(
      {
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
    getReport,
    create,
    findByCPF,
    findByCnpj,
    findById,
    updateById,
    deleteById
  };
};

module.exports = AgriculturistRepository;