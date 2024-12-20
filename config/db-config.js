const { Sequelize } = require('sequelize');
 require('dotenv').config();


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
});
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Error syncing database:', err));

module.exports = sequelize;