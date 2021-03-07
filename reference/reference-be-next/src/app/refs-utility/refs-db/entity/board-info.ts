import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Board } from './board';

export class Info extends Model {
    id: number;
    idBoard: number;
    type: string;
    info: string;
    contextOrder: number;
    insertDate: Date;
    updateDate: Date;
}

Info.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: DataTypes.BIGINT, references: { model: Board, key: 'id' } },
    type: { field: 'TYPE', type: DataTypes.STRING, allowNull: false },
    info: { field: 'INFO', type: DataTypes.STRING, allowNull: false },
    contextOrder: { field: 'CONTEXT_ORDER', type: DataTypes.INTEGER, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Info',
    tableName: 'REFS_BOARD_INFO',

    createdAt: false,
    updatedAt: false
});

