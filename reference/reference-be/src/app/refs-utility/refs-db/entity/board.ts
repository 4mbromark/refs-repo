import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Alix } from './alixlist';

export class Board extends Model {
    id: number;
    idAlix: number;
    insertDate: Date;
    updateDate: Date;
}

Board.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idAlix: { field: 'ID_ALIX', type: DataTypes.BIGINT, unique: true, references: { model: Alix, key: 'id' } },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Board',
    tableName: 'REFS_BOARD',

    createdAt: false,
    updatedAt: false
});

