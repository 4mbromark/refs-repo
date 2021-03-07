import { Model } from 'sequelize';
export declare class User extends Model {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    gender: string;
    insertDate: Date;
    updateDate: Date;
}
