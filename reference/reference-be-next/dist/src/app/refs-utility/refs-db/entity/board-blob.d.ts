import { Model } from 'sequelize';
export declare class Blob extends Model {
    id: number;
    idBoard: number;
    type: string;
    file: string;
    insertDate: Date;
    updateDate: Date;
}
