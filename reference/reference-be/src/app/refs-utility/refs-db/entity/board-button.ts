import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbconfig';
import { Board } from './board';

export class Button extends Model {
    id: number;
    idBoard: number;
    title: number;
    subtitle: number;
    type: string;
    action: string;
    border: string;
    radius: string;
    background: string;
    contextOrder: number;
    insertDate: Date;
    updateDate: Date;
}

Button.init({
    id: { field: 'ID', type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: DataTypes.BIGINT, references: { model: Board, key: 'id' } },
    title: { field: 'TITLE', type: DataTypes.BIGINT, defaultValue: null },
    subtitle: { field: 'SUBTITLE', type: DataTypes.BIGINT, defaultValue: null },
    type: { field: 'TYPE', type: DataTypes.STRING, allowNull: false },
    action: { field: 'ACTION', type: DataTypes.STRING, allowNull: false },
    border: { field: 'BORDER', type: DataTypes.STRING, defaultValue: null },
    radius: { field: 'RADIUS', type: DataTypes.STRING, defaultValue: null },
    background: { field: 'BACKGROUND', type: DataTypes.STRING, defaultValue: null },
    contextOrder: { field: 'CONTEXT_ORDER', type: DataTypes.INTEGER, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Button',
    tableName: 'REFS_BOARD_BUTTON',

    createdAt: false,
    updatedAt: false
});

