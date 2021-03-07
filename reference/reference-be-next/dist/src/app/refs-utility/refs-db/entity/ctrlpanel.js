"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
class Panel extends sequelize_1.Model {
}
exports.Panel = Panel;
Panel.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Panel',
    tableName: 'REFS_CTRLPANEL',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=ctrlpanel.js.map