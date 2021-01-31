import { DataTypes } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { User } from './reguser-withdefine';

export const Alix = sequelize.define('Alix', {
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true },
    idUser: { field: 'ID_USER', type: DataTypes.BIGINT, references: { model: User, key: 'id' } },
    alix: { field: 'ALIX', type: DataTypes.STRING, unique: true, allowNull: false },
    aka: { field: 'AKA', type: DataTypes.STRING },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    tableName: 'REFS_ALIX',

    createdAt: false,
    updatedAt: false
});
