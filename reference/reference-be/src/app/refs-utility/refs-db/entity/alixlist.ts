import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { User } from './reguser';

export class Alix extends Model {
    id: number;
    idUser: number;
    alix: string;
    aka: string;
    insertDate: Date;
    updateDate: Date;
}

Alix.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true },
    idUser: { field: 'ID_USER', type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
    alix: { field: 'ALIX', type: DataTypes.STRING, unique: true, allowNull: false },
    aka: { field: 'AKA', type: DataTypes.STRING },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Alix',
    tableName: 'REFS_ALIX',

    createdAt: false,
    updatedAt: false
});

