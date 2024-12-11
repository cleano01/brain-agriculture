function agriculturistBuilder() {
  const _cpf = "12345678901";
  const _cnpj= "12345678000195";
  const _producerName= "João da Silva";
  const _farmName= "Fazenda Santa Clara";
  const _city= "São Paulo";
  const _state= "SP";
  const _totalArea= 1000;
  const _arableArea= 800;
  const _vegetationArea= 150;
  const _plantedCrops= ["Coffee", "Corn"]
  
  const payload = {};

  return {

    withCpf: function(cpf) {
      payload.cpf = cpf || _cpf;
      
      return this;
    },

    withoutCpf: function(){
      delete payload.cpf;
      
      return this;
    },
    
    withCnpj: function (cnpj) {
      payload.cnpj = cnpj || _cnpj;
      
      return this;
    },

    withoutCnpj: function(){
      delete payload.cnpj;
      return this;
    },
    
    withProducerName: function (producerName) {
      payload.producerName = producerName || _producerName;
      
      return this;
    },
    
    withFarmName: function (farmName) {
      payload.farmName = farmName || _farmName;
      
      return this;
    },
    
    withCity: function (city) {
      payload.city = city || _city;
      
      return this;
    },
    
    withState: function (state) {
      payload.state = state || _state;
      return this;
    },
    
    withTotalArea: function (totalArea) {
      payload.totalArea = totalArea || _totalArea;
      
      return this;
    },
    
    withArableArea: function (arableArea) {
      payload.arableArea = arableArea || _arableArea;      
      
      return this;
    },
    
    withVegetationArea: function (vegetationArea) {
      payload.vegetationArea = vegetationArea || _vegetationArea;
     
      return this;
    },
    
    withPlantedCrops: function (plantedCrops) {
      payload.plantedCrops = plantedCrops || _plantedCrops;
      return this;
    },

    withAllData: function (data = {}) {
      this.withCpf(data.cpf);
      this.withCnpj(data.cnpj);
      this.withProducerName(data.producerName);
      this.withFarmName(data.farmName);
      this.withCity(data.city);
      this.withState(data.state);
      this.withTotalArea(data.totalArea);
      this.withArableArea(data.arableArea);
      this.withVegetationArea(data.vegetationArea);
      this.withPlantedCrops(data.plantedCrops);

      return this;
    },

    build: function () {
      return payload;
    },
  }
}

module.exports = agriculturistBuilder;