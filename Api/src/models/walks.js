const { DataTypes } = require('sequelize');   

module.exports = (sequelize) => {
    sequelize.define("walks",{
        id:{
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false, 
            primaryKey: true
        }, 
        
        StartDate:{
            type:DataTypes.DATE,  
            allowNull: false, 
        },
        FinishDate:{ 
            type:DataTypes.DATE,  
            allowNull: false, 
        },
        state:{ 
            type:DataTypes.TEXT, 
            allowNull: false,  
        },
        photo:{ 
            type:DataTypes.STRING, 
            allowNull: false,
        }
    })
}