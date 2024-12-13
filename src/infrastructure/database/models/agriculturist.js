'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agriculturist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agriculturist.init({
    cpf: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    producerName: DataTypes.STRING,
    farmName: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    totalArea: DataTypes.FLOAT,
    arableArea: DataTypes.FLOAT,
    vegetationArea: DataTypes.FLOAT,
    plantedCrops: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Agriculturist',
  });
  return Agriculturist;
};