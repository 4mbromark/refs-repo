import { Model } from 'sequelize';
export declare class Userinfo extends Model {
    id: number;
    idBoard: number;
    name: string;
    sentence: number;
    profile: number;
    avatar: number;
    bio: string;
    infoList: string;
    buttonList: string;
    insertDate: Date;
    updateDate: Date;
}
