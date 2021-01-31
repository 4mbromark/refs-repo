import { QueryTypes } from "sequelize";
import { Sequelize } from "sequelize";
import { Env } from "../../refs-env/future-env";

export const sequelize = new Sequelize(Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
    host: Env.DB_HOSTURL,
    dialect: Env.DB_DIALECT,
    query: {
        raw: true,
        logging: false,
        type: QueryTypes.SELECT
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error: any) => {
    console.error('Unable to connect to the database:', error);
});