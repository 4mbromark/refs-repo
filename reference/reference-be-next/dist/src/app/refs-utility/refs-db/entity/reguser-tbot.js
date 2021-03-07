"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
class Bot extends sequelize_1.Model {
}
exports.Bot = Bot;
Bot.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Bot',
    tableName: 'REFS_REGUSER_TBOT',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=reguser-tbot.js.map