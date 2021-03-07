import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { User } from './reguser';

export class Extra extends Model {
    id: number;
    idUser: number;
    propic: string;
    insertDate: Date;
    updateDate: Date;
}

Extra.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idUser: { field: 'ID_USER', type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
    propic: { field: 'PROPIC', type: DataTypes.BLOB, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Extra',
    tableName: 'REFS_REGUSER_EXTDATA',

    createdAt: false,
    updatedAt: false
});

