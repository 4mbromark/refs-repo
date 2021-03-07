"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.License = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
class License extends sequelize_1.Model {
}
exports.License = License;
License.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'License',
    tableName: 'REFS_REGUSER_LICENSE',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=reguser-license.js.map