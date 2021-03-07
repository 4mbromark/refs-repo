"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aka = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
const alixlist_1 = require("./alixlist");
class Aka extends sequelize_1.Model {
}
exports.Aka = Aka;
Aka.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    idAlix: { field: 'ID_ALIX', type: sequelize_1.DataTypes.BIGINT, references: { model: alixlist_1.Alix, key: 'id' } },
    aka: { field: 'AKA', type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'Aka',
    tableName: 'REFS_ALIXLIST_AKA',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=alixlist-aka.js.map