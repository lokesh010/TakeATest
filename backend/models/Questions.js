const { DataTypes } = require('sequelize');
const Subjects = require('./Subjects');

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
        // subjectId:
        // {
        //     references:{
        //         model: Subjects,   
        //     key: id
        //     }
        // }  
	});

    Questions.associate = models => {
        Questions.belongsTo(models.Subjects, {
            foreignKey: 'subjectId',
            onDelete: "cascade"
        })
    }

    return Questions
};
