"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const dbconfig_1 = require("../config/dbconfig");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: { field: 'ID', type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { field: 'NAME', type: sequelize_1.DataTypes.STRING, allowNull: false },
    surname: { field: 'SURNAME', type: sequelize_1.DataTypes.STRING, allowNull: false },
    username: { field: 'USERNAME', type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    email: { field: 'EMAIL', type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    password: { field: 'PASSWORD', type: sequelize_1.DataTypes.STRING, allowNull: false },
    gender: { field: 'GENDER', type: sequelize_1.DataTypes.STRING, allowNull: false },
    insertDate: { field: 'INSERT_DATE', type: sequelize_1.DataTypes.DATE },
    updateDate: { field: 'UPDATE_DATE', type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbconfig_1.sequelize,
    modelName: 'User',
    tableName: 'REFS_REGUSER',
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=reguser.js.map