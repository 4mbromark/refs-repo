"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const alixlist_1 = require("./alixlist");
class Board extends sequelize_1.Model {
}
exports.Board = Board;
Board.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idAlix: { field: 'ID_ALIX', type: sequelize_1.DataTypes.BIGINT, unique: true, references: { model: alixlist_1.Alix, key: 'id' } },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Board',
    tableName: 'REFS_BOARD',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=board.js.map