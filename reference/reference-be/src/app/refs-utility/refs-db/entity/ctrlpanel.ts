import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';

export class Panel extends Model {
    id: number;
    
    insertDate: Date;
    updateDate: Date;
}

Panel.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
   
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Panel',
    tableName: 'REFS_CTRLPANEL',

    createdAt: false,
    updatedAt: false
});

