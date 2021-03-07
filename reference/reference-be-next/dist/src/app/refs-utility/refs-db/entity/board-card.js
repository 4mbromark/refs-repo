"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const board_1 = require("./board");
class Card extends sequelize_1.Model {
}
exports.Card = Card;
Card.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idBoard: { field: 'ID_BOARD', type: sequelize_1.DataTypes.BIGINT, references: { model: board_1.Board, key: 'id' } },
    title: { field: 'TITLE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    subtitle: { field: 'SUBTITLE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    avatar: { field: 'AVATAR', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    caption: { field: 'CAPTION', type: sequelize_1.DataTypes.TEXT, defaultValue: null },
    text: { field: 'TEXT', type: sequelize_1.DataTypes.TEXT, defaultValue: null },
    image: { field: 'IMAGE', type: sequelize_1.DataTypes.BIGINT, defaultValue: null },
    infoList: { field: 'INFO_LIST', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    buttonList: { field: 'BUTTON_LIST', type: sequelize_1.DataTypes.STRING, defaultValue: null },
    contextOrder: { field: 'CONTEXT_ORDER', type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Card',
    tableName: 'REFS_BOARD_CARD',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=board-card.js.map