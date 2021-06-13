'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      take_count:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      marks:
      {
        type: DataTypes.INTEGER(3),
        allowNull: false,
      },
      correct:
      {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      chosen:
      {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      deletedAt: DataTypes.DATE,
      // fk
      AnswerId:
      {
        type: DataTypes.INTEGER,
        field: 'answer_id',
        references: {
          model: "Answers",
          key: "id"
        },
      },
      QuestionId:
      {
        type: DataTypes.INTEGER,
        field: 'question_id',
        references: {
          model: "Questions",
          key: "id"
        },
      },
      TestId:
      {
        type: DataTypes.INTEGER,
        field: 'test_id',
        references: {
          model: "Tests",
          key: "id"
        },
      },
      UserId:
      {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
          model: "Users",
          key: "id"
        },
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Results');
    
  }
};
