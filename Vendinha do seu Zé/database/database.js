const Sequelize = require("sequelize");

const connection = new Sequelize('lana',
'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;