import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Board } from './board';

export class Card extends Model {
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

Card.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: DataTypes.BIGINT, references: { model: Board, key: 'id' } },
    title: { field: 'TITLE', type: DataTypes.BIGINT, defaultValue: null },
    subtitle: { field: 'SUBTITLE', type: DataTypes.BIGINT, defaultValue: null },
    avatar: { field: 'AVATAR', type: DataTypes.BIGINT, defaultValue: null },
    caption: { field: 'CAPTION', type: DataTypes.TEXT, defaultValue: null },
    text: { field: 'TEXT', type: DataTypes.TEXT, defaultValue: null },
    image: { field: 'IMAGE', type: DataTypes.BIGINT, defaultValue: null },
    infoList: { field: 'INFO_LIST', type: DataTypes.STRING, defaultValue: null },
    buttonList: { field: 'BUTTON_LIST', type: DataTypes.STRING, defaultValue: null },
    contextOrder: { field: 'CONTEXT_ORDER', type: DataTypes.INTEGER, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Card',
    tableName: 'REFS_BOARD_CARD',

    createdAt: false,
    updatedAt: false
});

