module.exports = (sequelize, DataTypes) => {
  const Tests = sequelize.define('Tests', {
    id:
    {
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
  });

  Tests.associate = models => {
    Tests.hasMany(models.Questions, {
      foreignKey: 'TestId',
      sourceKey: 'id'
    });
  };

  return Tests;
};