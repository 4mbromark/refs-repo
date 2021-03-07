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
exports.AlixDao = void 0;
const sequelize_1 = require("sequelize");
const alixlist_1 = require("../refs-utility/refs-db/entity/alixlist");
class AlixDao {
    getAlixById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alix = yield alixlist_1.Alix.findByPk(id);
            return alix;
        });
    }
    getAlixByIdUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const alix = yield alixlist_1.Alix.findAll({
                where: {
                    idUser: { [sequelize_1.Op.eq]: idUser },
                }
            });
            return alix;
        });
    }
    getAlixByAlix(a) {
        return __awaiter(this, void 0, void 0, function* () {
            const alix = yield alixlist_1.Alix.findOne({
                where: {
                    alix: { [sequelize_1.Op.eq]: a },
                }
            });
            return alix;
        });
    }
    getAlixByAlixAndIdUser(a, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const alix = yield alixlist_1.Alix.findOne({
                where: {
                    [sequelize_1.Op.and]: [
                        { idUser: { [sequelize_1.Op.eq]: idUser } },
                        { alix: { [sequelize_1.Op.eq]: a } }
                    ]
                }
            });
            return alix;
        });
    }
}
exports.AlixDao = AlixDao;
//# sourceMappingURL=alix.dao.js.map