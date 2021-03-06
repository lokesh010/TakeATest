const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Answers = sequelize.define('Answers', {
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
      type: DataTypes.INTEGER,
      field: 'question_id',
      references: {
        model: "Questions",
        key: "id"
      }
    }
  }, {
    // soft delete
    paranoid: true
  });

  Answers.associate = models => {
    Answers.belongsTo(models.Questions, {
      foreignKey: 'id',
      sourceKey: 'QuestionId'
    });
  };

  return Answers
};
