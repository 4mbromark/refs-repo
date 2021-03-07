import { Model } from 'sequelize';
export declare class Textline extends Model {
    id: number;
    idBoard: number;
    text: string;
    size: string;
    color: string;
    weight: string;
    insertDate: Date;
    updateDate: Date;
}
