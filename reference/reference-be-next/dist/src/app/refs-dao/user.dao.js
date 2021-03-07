"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDao = void 0;
const sequelize_1 = require("sequelize");
const reguser_1 = require("../refs-utility/refs-db/entity/reguser");
class UserDao {
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield reguser_1.User.findByPk(id);
            return user;
        });
    }
    getUserByUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield reguser_1.User.findOne({
                where: {
                    [sequelize_1.Op.or]: [
                        { email: { [sequelize_1.Op.eq]: uid } },
                        { username: { [sequelize_1.Op.eq]: uid } }
                    ]
                }
            });
            return user;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield reguser_1.User.findOne({
                where: {
                    email: email,
                }
            });
            return user;
        });
    }
    /** @deprecated */
    getUserByUserAndPassword(uid, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield reguser_1.User.findOne({
                where: {
                    [sequelize_1.Op.or]: [
                        {
                            [sequelize_1.Op.and]: [
                                { email: { [sequelize_1.Op.eq]: uid } },
                                { password: { [sequelize_1.Op.eq]: pwd } }
                            ]
                        },
                        {
                            [sequelize_1.Op.and]: [
                                { username: { [sequelize_1.Op.eq]: uid } },
                                { password: { [sequelize_1.Op.eq]: pwd } }
                            ]
                        }
                    ]
                }
            });
            return user;
        });
    }
}
exports.UserDao = UserDao;
//# sourceMappingURL=user.dao.js.map