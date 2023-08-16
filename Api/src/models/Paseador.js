// ID: UUID
// Nombre: String
// Password: String
// Descripción: text
// Email:String
// Disponibilidad: false
// Direccion: string
// Telefono: String

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Paseador', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    descripción:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    disponibilidad:{
        type: DataTypes.BOOLEAN,
        unique: true,
        allowNull: false,
    }
  }, 
  { 
    timestamps: false
  });
};