"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const board_1 = require("./board");
class Info extends sequelize_1.Model {
}
exports.Info = Info;
Info.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: sequelize_1.DataTypes.BIGINT, references: { model: board_1.Board, key: 'id' } },
    type: { field: 'TYPE', type: sequelize_1.DataTypes.STRING, allowNull: false },
    info: { field: 'INFO', type: sequelize_1.DataTypes.STRING, allowNull: false },
    contextOrder: { field: 'CONTEXT_ORDER', type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Info',
    tableName: 'REFS_BOARD_INFO',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=board-info.js.map