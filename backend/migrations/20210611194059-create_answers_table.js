'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Answers', { 

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      answer:
      {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      correct:
      {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      // fk
      QuestionId:
      {
        type: DataTypes.INTEGER(11),
        field: 'question_id',
        allowNull: false,
        unique: false
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Answers');
  }
};
