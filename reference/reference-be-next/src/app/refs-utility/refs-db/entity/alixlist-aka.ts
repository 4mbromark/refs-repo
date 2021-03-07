import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Alix } from './alixlist';

export class Aka extends Model {
    id: number;
    idAlix: number;
    aka: string;
    insertDate: Date;
    updateDate: Date;
}

Aka.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idAlix: { field: 'ID_ALIX', type: DataTypes.BIGINT, references: { model: Alix, key: 'id' } },
    aka: { field: 'AKA', type: DataTypes.STRING, unique: true, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Aka',
    tableName: 'REFS_ALIXLIST_AKA',

    createdAt: false,
    updatedAt: false
});

