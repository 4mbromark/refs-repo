"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const board_1 = require("./board");
class Button extends sequelize_1.Model {
}
exports.Button = Button;
Button.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: sequelize_1.DataTypes.BIGINT, references: { model: board_1.Board, key: 'id' } },
    title: { field: 'TITLE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    subtitle: { field: 'SUBTITLE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    type: { field: 'TYPE', type: sequelize_1.DataTypes.STRING, allowNull: false },
    action: { field: 'ACTION', type: sequelize_1.DataTypes.STRING, allowNull: false },
    border: { field: 'BORDER', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    radius: { field: 'RADIUS', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    background: { field: 'BACKGROUND', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    contextOrder: { field: 'CONTEXT_ORDER', type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Button',
    tableName: 'REFS_BOARD_BUTTON',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=board-button.js.map