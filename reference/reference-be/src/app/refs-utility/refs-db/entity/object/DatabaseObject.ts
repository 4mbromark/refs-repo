import { Model } from "sequelize/types";

export class DatabaseObject extends Model {
    id: number;

    insertDate: Date;
    updateDate: Date;
}