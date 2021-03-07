import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';

export class Bot extends Model {
    id: number;
    
    insertDate: Date;
    updateDate: Date;
}

Bot.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
   
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Bot',
    tableName: 'REFS_REGUSER_TBOT',

    createdAt: false,
    updatedAt: false
});

