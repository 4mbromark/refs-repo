"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const board_1 = require("./board");
class Page extends sequelize_1.Model {
}
exports.Page = Page;
Page.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: sequelize_1.DataTypes.BIGINT, references: { model: board_1.Board, key: 'id' } },
    code: { field: 'CODE', type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    title: { field: 'TITLE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    subtitle: { field: 'SUBTITLE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    avatar: { field: 'AVATAR', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    caption: { field: 'CAPTION', type: sequelize_1.DataTypes.TEXT, defaultValue: null },
    text: { field: 'TEXT', type: sequelize_1.DataTypes.TEXT, defaultValue: null },
    image: { field: 'IMAGE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    infoList: { field: 'INFO_LIST', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    buttonList: { field: 'BUTTON_LIST', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Page',
    tableName: 'REFS_BOARD_PAGE',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=board-page.js.map