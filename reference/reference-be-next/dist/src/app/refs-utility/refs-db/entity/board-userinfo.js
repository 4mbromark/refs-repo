"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userinfo = void 0;
const dbconfig_1 = require("./../config/dbconfig");
const sequelize_1 = require("sequelize");
const board_1 = require("./board");
class Userinfo extends sequelize_1.Model {
}
exports.Userinfo = Userinfo;
Userinfo.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: sequelize_1.DataTypes.BIGINT, unique: true, references: { model: board_1.Board, key: 'id' } },
    name: { field: 'NAME', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    sentence: { field: 'SENTENCE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    profile: { field: 'PROFILE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    avatar: { field: 'AVATAR', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    bio: { field: 'BIO', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    infoList: { field: 'INFO_LIST', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    buttonList: { field: 'BUTTON_LIST', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Userinfo',
    tableName: 'REFS_BOARD_USERINFO',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=board-userinfo.js.map