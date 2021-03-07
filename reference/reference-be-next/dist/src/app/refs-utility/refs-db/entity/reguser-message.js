"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
class Message extends sequelize_1.Model {
}
exports.Message = Message;
Message.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Message',
    tableName: 'REFS_REGUSER_MESSAGE',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=reguser-message.js.map