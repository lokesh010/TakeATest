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
          subjectId:
          {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: true
          },
          // timestamps
          created_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
          },
            updated_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
          }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('questions');
  }
};
