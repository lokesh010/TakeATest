'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      question:
      {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      marks:
      {
        type: DataTypes.INTEGER(3),
        allowNull: false,
      },
      // fk
      TestId:
      {
        type: DataTypes.INTEGER,
        field: 'test_id',
        references: {
          model: "Tests",
          key: "id"
        }
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  }
};
