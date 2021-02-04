import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';

export class License extends Model {
    id: number;
    
    insertDate: Date;
    updateDate: Date;
}

License.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
   
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'License',
    tableName: 'REFS_REGUSER_LICENSE',

    createdAt: false,
    updatedAt: false
});

