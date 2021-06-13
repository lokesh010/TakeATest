module.exports = (sequelize, DataTypes) => {
  const Results = sequelize.define('Results', {
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
    passMarks:
    {
      type: DataTypes.INTEGER(3),
      field: 'pass_marks',
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

  });

  Results.associate = models => {

    Results.belongsTo(models.Users, {
      foreignKey: 'UserId',
      sourceKey: 'id'
    });

    Results.belongsTo(models.Answers, {
      foreignKey: 'AnswerId',
      sourceKey: 'id'
    });

    Results.belongsTo(models.Questions, {
      foreignKey: 'QuestionId',
      sourceKey: 'id'
    });

    Results.belongsTo(models.Tests, {
      foreignKey: 'TestId',
      sourceKey: 'id'
    });
  };

  return Results;
};