import { QueryTypes } from "sequelize";
import { Sequelize } from "sequelize";

require('dotenv').config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOSTURL,
    dialect: 'mysql',
    query: {
        raw: true,
        // logging: false,
        type: QueryTypes.SELECT
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error: any) => {
    console.error('Unable to connect to the database:', error);
});