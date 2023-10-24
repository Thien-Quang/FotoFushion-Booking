const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");

require("dotenv").config();

const sequelize = new Sequelize("Restaurant", "root", 123456, {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql", // Loại cơ sở dữ liệu
});

module.exports = sequelize;
