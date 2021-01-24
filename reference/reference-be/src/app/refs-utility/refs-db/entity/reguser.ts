import { DataTypes } from 'sequelize';
import { sequelize } from '../config/dbconfig';


export const User = sequelize.define('User', {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    insertDate: { type: DataTypes.DATE },
    updateDate: { type: DataTypes.DATE }
}, {
    tableName: 'REFS_REGSUER'
});
