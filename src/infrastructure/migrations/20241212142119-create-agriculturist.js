'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agriculturists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true,   
        allowNull: true,    
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true, 
      },
      producerName: {
        type: Sequelize.STRING
      },
      farmName: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      totalArea: {
        type: Sequelize.FLOAT
      },
      arableArea: {
        type: Sequelize.FLOAT
      },
      vegetationArea: {
        type: Sequelize.FLOAT
      },
      plantedCrops: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Agriculturists');
  }
};