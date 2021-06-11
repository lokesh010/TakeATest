module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        fullName:
        {
            type: DataTypes.STRING,
            field: 'full_name',
            allowNull: false,

        },
        phone:
        {
            type: DataTypes.BIGINT,
            unique: true
        },
        address: DataTypes.STRING,
        email:
        {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('admin', 'student'),
            allowNull: false
        },

    });
    return Users;
};