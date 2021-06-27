const Sequelize = require("sequelize");

const sequelize = new Sequelize("database_demo", "root", "Aditya@1999", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;