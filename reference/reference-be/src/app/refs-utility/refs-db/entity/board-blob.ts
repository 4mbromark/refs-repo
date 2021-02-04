import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Board } from './board';

export class Blob extends Model {
    id: number;
    idBoard: number;
    type: string;
    file: File;
    insertDate: Date;
    updateDate: Date;
}

Blob.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: DataTypes.BIGINT, references: { model: Board, key: 'id' } },
    type: { field: 'TYPE', type: DataTypes.STRING, allowNull: false },
    file: { field: 'FILE', type: DataTypes.BLOB, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Blob',
    tableName: 'REFS_BOARD_BLOB',

    createdAt: false,
    updatedAt: false
});

