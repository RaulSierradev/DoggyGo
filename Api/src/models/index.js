const { Sequelize, DataTypes } = require('sequelize');
// const { User, Walker } = require('./models')

const sequelize = new Sequelize(
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/doggygo`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

//checking if connection is done
sequelize.authenticate().then(() => {
    console.log(`Database connected to doggygo`)
}).catch((err) => {
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.users = require('./user')(sequelize, DataTypes)
db.walkers = require('./walkers')(sequelize, DataTypes)

// Create the association
db.users.hasOne(db.walkers, { foreignKey: 'user_id' });
db.walkers.belongsTo(db.users, { foreignKey: 'user_id' });

// Sync the models with the database
sequelize.sync();

//exporting the module
module.exports = db
