//user model


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true, //checks for email format
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, { timestamps: false },)

    // // a hook that will be triggered before a new user record is created in the database. 
    // // This ensures that the password is hashed before it's saved
    // User.addHook('beforeCreate', (user, options) => {
    //     const salt = bcrypt.genSaltSync();
    //     user.password = bcrypt.hashSync(user.password, salt);
    // });


    return User
}