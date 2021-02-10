import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Board } from './board';

export class Textline extends Model {
    id: number;
    idBoard: number;
    text: string;
    size: string;
    color: string;
    weight: string;
    insertDate: Date;
    updateDate: Date;
}

Textline.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: DataTypes.BIGINT, references: { model: Board, key: 'id' } },
    text: { field: 'TEXT', type: DataTypes.TEXT, defaultValue: null },
    size: { field: 'SIZE', type: DataTypes.STRING, defaultValue: null },
    color: { field: 'COLOR', type: DataTypes.STRING, defaultValue: null },
    weight: { field: 'WEIGHT', type: DataTypes.STRING, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Textline',
    tableName: 'REFS_BOARD_TEXTLINE',

    createdAt: false,
    updatedAt: false
});

