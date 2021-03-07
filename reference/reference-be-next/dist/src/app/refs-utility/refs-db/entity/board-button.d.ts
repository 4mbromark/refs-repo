import { Model } from 'sequelize';
export declare class Button extends Model {
    id: number;
    idBoard: number;
    title: number;
    subtitle: number;
    type: string;
    action: string;
    border: string;
    radius: string;
    background: string;
    contextOrder: number;
    insertDate: Date;
    updateDate: Date;
}
