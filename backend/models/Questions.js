const { DataTypes } = require('sequelize');
const Tests = require('./Tests');

module.exports = (sequelize) => {
    const Questions = sequelize.define('Questions', {
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
        TestId: {
            type: DataTypes.INTEGER,
            field: 'test_id',
            references: {
                model: Tests,
                key: "id"
            }
        }
    }, {
        // soft delete
        paranoid: true
    });

    Questions.associate = models => {
        Questions.belongsTo(models.Tests, {
            foreignKey: 'id',
            sourceKey: 'TestId'
        });
    };

    Questions.associate = models => {
        Questions.hasMany(models.Answers, {
            foreignKey: 'QuestionId',
            sourceKey: 'id'
        });
    };



    return Questions
};
