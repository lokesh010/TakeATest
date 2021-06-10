const Questions = require('./Questions');

module.exports = (sequelize, DataTypes) => {
	const Subject = sequelize.define('Subjects', {
		id: {
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
        totalMarks:
        {
            type: DataTypes.INTEGER,
            field: 'total_marks',
            allowNull: false,
        },    
        // timestamps
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
            updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
	});

    Subject.associate = models => {
        Subject.hasMany(models.Questions, {
            foreignKey: 'subjectId',
            onDelete: "cascade"
        })
    }

    return Subject;
};