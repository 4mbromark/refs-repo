import { Model } from 'sequelize';
export declare class Card extends Model {
    id: number;
    idBoard: number;
    title: number;
    subtitle: number;
    avatar: number;
    caption: string;
    text: string;
    image: number;
    infoList: string;
    buttonList: string;
    contextOrder: number;
    insertDate: Date;
    updateDate: Date;
}
