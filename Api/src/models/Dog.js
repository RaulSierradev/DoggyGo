const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Dog', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        race: {
            type: DataTypes.ENUM('SMALL', 'MEDIUM', 'LARGE'),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        recomendation: {
            type: DataTypes.STRING(50)
        }
    }, {
        timestamps: false
    });
};
