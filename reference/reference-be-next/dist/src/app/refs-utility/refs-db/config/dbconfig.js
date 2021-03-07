"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
require('dotenv').config();
exports.sequelize = new sequelize_2.Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOSTURL,
    dialect: 'mysql',
    query: {
        raw: true,
        logging: false,
        type: sequelize_1.QueryTypes.SELECT
    }
});
exports.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
//# sourceMappingURL=dbconfig.js.map