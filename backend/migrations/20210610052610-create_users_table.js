'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fullName:
      {
          type: DataTypes.STRING,
          field: 'full_name',
          allowNull: false,

      },
      phone:
      {
          type: DataTypes.BIGINT,
          unique: true
      },
      email:
      {      
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
      },
      password:
      {      
          type: DataTypes.STRING,
          allowNull: false
      },
      address:
      {      
        type: DataTypes.STRING,
        allowNull: true
      },
      role:{
          type: DataTypes.ENUM('admin', 'student'),
          allowNull: false
      },

        // Timestamps
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('users')
     
  }
};
