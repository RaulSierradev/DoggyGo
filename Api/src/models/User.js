const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Walker', {
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
    image:{
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
    birthdate:{
      type: DataTypes.DATEONLY,
      allowNull: false,
  },    
    address:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    suscription:{
      type: DataTypes.BOOLEAN,
      unique: true,
      allowNull: false,
    },    
    status:{
      type: DataTypes.BOOLEAN,
      unique: true,
      allowNull: false,
    },
    Rol:{
      type: DataTypes.ENUM('Walker', 'Client'),
      unique: true,
      allowNull: false,
    }
  }, 
  { 
    timestamps: false
  });
};