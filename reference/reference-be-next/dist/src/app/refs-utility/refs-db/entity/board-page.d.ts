import { Model } from 'sequelize';
export declare class Page extends Model {
    id: number;
    idBoard: number;
    code: string;
    title: number;
    subtitle: number;
    avatar: number;
    caption: string;
    text: string;
    image: number;
    infoList: string;
    buttonList: string;
    insertDate: Date;
    updateDate: Date;
}
