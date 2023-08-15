//user model
module.exports = (sequelize, DataTypes) => {
    const Walker = sequelize.define("walker", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users', // name of the table
                key: 'id'
            },
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        availability: {
            type: DataTypes.ENUM('online', 'offline'),
        },
    }, { timestamps: false },)
    return Walker
}