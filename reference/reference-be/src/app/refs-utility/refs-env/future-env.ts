import { Dialect } from "sequelize/types";

export class Env {
    public static PORT: number = 3000;

    public static JWT_SECRET: string = 'A1issc3Dr4wR3f3r3nc3';
    public static JWT_EXPIRATION: string = '2h';

    public static CRYPT_KEY: string = 'B3stOOr@ng3';

    public static DB_HOSTURL: string = 'localhost';
    public static DB_NAME: string = 'refs-data';
    public static DB_USERNAME: string = 'root';
    public static DB_PASSWORD: string = 'stotcncl';
    public static DB_DIALECT: Dialect = 'mysql';
}