import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Board } from './board';

export class Page extends Model {
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

Page.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: DataTypes.BIGINT, references: { model: Board, key: 'id' } },
    code: { field: 'CODE', type: DataTypes.STRING, unique: true, allowNull: false },
    title: { field: 'TITLE', type: DataTypes.BIGINT, defaultValue: null },
    subtitle: { field: 'SUBTITLE', type: DataTypes.BIGINT, defaultValue: null },
    avatar: { field: 'AVATAR', type: DataTypes.BIGINT, defaultValue: null },
    caption: { field: 'CAPTION', type: DataTypes.TEXT, defaultValue: null },
    text: { field: 'TEXT', type: DataTypes.TEXT, defaultValue: null },
    image: { field: 'IMAGE', type: DataTypes.BIGINT, defaultValue: null },
    infoList: { field: 'INFO_LIST', type: DataTypes.STRING, defaultValue: null },
    buttonList: { field: 'BUTTON_LIST', type: DataTypes.STRING, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Page',
    tableName: 'REFS_BOARD_PAGE',

    createdAt: false,
    updatedAt: false
});

