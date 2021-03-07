"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textline = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const board_1 = require("./board");
class Textline extends sequelize_1.Model {
}
exports.Textline = Textline;
Textline.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: sequelize_1.DataTypes.BIGINT, references: { model: board_1.Board, key: 'id' } },
    text: { field: 'TEXT', type: sequelize_1.DataTypes.TEXT, defaultValue: null },
    size: { field: 'SIZE', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    color: { field: 'COLOR', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    weight: { field: 'WEIGHT', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Textline',
    tableName: 'REFS_BOARD_TEXTLINE',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=board-textline.js.map