const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Dogs', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        race: {
            type: DataTypes.ENUM('SMALL', 'MEDIUM', 'LARGE'),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER(),
            allowNull: false
        },
        recomendations: {
            type: DataTypes.STRING(50)
        }
    }, {
        timestamps: false
    });
};
