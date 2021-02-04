import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';

export class Message extends Model {
    id: number;
    
    insertDate: Date;
    updateDate: Date;
}

Message.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
   
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Message',
    tableName: 'REFS_REGUSER_MESSAGE',

    createdAt: false,
    updatedAt: false
});

