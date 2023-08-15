//user model
module.exports = (sequelize, DataTypes) => {
    const Walker = sequelize.define("walker", {
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
    }, { timestamps: false },)
    return Walker
}