import { Model } from 'sequelize';
export declare class Info extends Model {
    id: number;
    idBoard: number;
    type: string;
    info: string;
    contextOrder: number;
    insertDate: Date;
    updateDate: Date;
}
