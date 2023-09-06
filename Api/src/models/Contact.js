const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Contact', { 
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.ENUM("Ayuda", "Contacto", "Problema", "Otro"),
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message:{
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
};
