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
        testId: {
            type: DataTypes.INTEGER,
            references: {
                model: Tests,
                key: "id"
            }
        }
	});

    Questions.associate= models => {
        Questions.belongsTo(models.Tests,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Questions
};
