"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extra = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const reguser_1 = require("./reguser");
class Extra extends sequelize_1.Model {
}
exports.Extra = Extra;
Extra.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idUser: { field: 'ID_USER', type: sequelize_1.DataTypes.BIGINT, references: { model: reguser_1.User, key: 'id' } },
    propic: { field: 'PROPIC', type: sequelize_1.DataTypes.BLOB, defaultValue: null },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Extra',
    tableName: 'REFS_REGUSER_EXTDATA',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=reguser-extdata.js.map