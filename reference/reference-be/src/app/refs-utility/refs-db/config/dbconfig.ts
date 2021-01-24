import { QueryTypes } from "sequelize";
import { Sequelize } from "sequelize";
import { DatabaseData } from "./dbdata";

export const sequelize = new Sequelize(DatabaseData.DATABASE_NAME, DatabaseData.DATABASE_USERNAME, DatabaseData.DATABASE_PASSWORD, {
    host: DatabaseData.DATABASE_HOST,
    dialect: 'mysql',
    query: {
        raw: true,
        type: QueryTypes.SELECT
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error: any) => {
    console.error('Unable to connect to the database:', error);
});