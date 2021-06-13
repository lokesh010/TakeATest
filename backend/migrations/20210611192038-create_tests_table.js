'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:
      {
        type: DataTypes.STRING,
        field: 'name',
        allowNull: false,
      },
      description:
      {
        type: DataTypes.STRING(100),
        field: 'description',
        allowNull: false,
      },
      totalMarks:
      {
        type: DataTypes.INTEGER(3),
        field: 'total_marks',
        allowNull: false,
      },
      passMarks:
      {
        type: DataTypes.INTEGER(3),
        field: 'pass_marks',
        allowNull: false,
      },
      // Timestamps
      deletedAt: DataTypes.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tests');
    
  }
};
