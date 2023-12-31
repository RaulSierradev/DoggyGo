require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_URL } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/doggygo`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { User, Walk, Dog, Review, Contact } = sequelize.models;

// Aca vendrian las relaciones

User.hasMany(Dog);
Dog.belongsToMany(User, { through: "UserDogs", timestamps: false });

Dog.hasOne(User);
User.belongsToMany(Dog, { through: "UserDogs", timestamps: false });

User.hasMany(Walk);
Walk.belongsToMany(User, { through: "UserWalks", timestamps: false });

Walk.hasMany(User);
User.belongsToMany(Walk, { through: "UserWalks", timestamps: false });

// User.hasMany(Review);
// Review.belongsTo(User);


User.hasMany(Review, {
  foreignKey: 'clientId',
  as: 'clientReviews',
});
Review.belongsTo(User, {
  foreignKey: 'clientId',
  as: 'client',
});


User.hasMany(Review, {
  foreignKey: 'walkerId',
  as: 'Reviews',
});
Review.belongsTo(User, {
  foreignKey: 'walkerId',
  as: 'walker',
});



Contact.hasMany(User);
User.belongsTo(Contact);

User.hasMany(Contact);
Contact.belongsTo(User);



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
