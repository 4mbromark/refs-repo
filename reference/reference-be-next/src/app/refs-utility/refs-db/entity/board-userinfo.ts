import { sequelize } from './../config/dbconfig';
import { DataTypes, Model } from 'sequelize';
import { Board } from './board';

export class Userinfo extends Model {
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

Userinfo.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: DataTypes.BIGINT, unique: true, references: { model: Board, key: 'id' } },
    name: { field: 'NAME', type: DataTypes.STRING, defaultValue: null },
    sentence: { field: 'SENTENCE', type: DataTypes.BIGINT, defaultValue: null },
    profile: { field: 'PROFILE', type: DataTypes.BIGINT, defaultValue: null },
    avatar: { field: 'AVATAR', type: DataTypes.BIGINT, defaultValue: null },
    bio: { field: 'BIO', type: DataTypes.STRING, defaultValue: null },
    infoList: { field: 'INFO_LIST', type: DataTypes.STRING, defaultValue: null },
    buttonList: { field: 'BUTTON_LIST', type: DataTypes.STRING, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Userinfo',
    tableName: 'REFS_BOARD_USERINFO',

    createdAt: false,
    updatedAt: false
});

