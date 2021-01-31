import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';

export class User extends Model {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    gender: string;
    insertDate: Date;
    updateDate: Date;
}

User.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true },
    name: { field: 'NAME', type: DataTypes.STRING, allowNull: false },
    surname: { field: 'SURNAME', type: DataTypes.STRING, allowNull: false },
    username: { field: 'USERNAME', type: DataTypes.STRING, unique: true, allowNull: false },
    email: { field: 'EMAIL', type: DataTypes.STRING, unique: true, allowNull: false },
    password: { field: 'PASSWORD', type: DataTypes.STRING, allowNull: false },
    gender: { field: 'GENDER', type: DataTypes.STRING, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'REFS_REGUSER',

    createdAt: false,
    updatedAt: false
});

