"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alix = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const reguser_1 = require("./reguser");
class Alix extends sequelize_1.Model {
}
exports.Alix = Alix;
Alix.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idUser: { field: 'ID_USER', type: sequelize_1.DataTypes.BIGINT, references: { model: reguser_1.User, key: 'id' } },
    alix: { field: 'ALIX', type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Alix',
    tableName: 'REFS_ALIXLIST',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=alixlist.js.map