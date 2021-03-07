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
exports.AkaDao = void 0;
const sequelize_1 = require("sequelize");
const alixlist_aka_1 = require("../refs-utility/refs-db/entity/alixlist-aka");
class AkaDao {
    getAkaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aka = yield alixlist_aka_1.Aka.findByPk(id);
            return aka;
        });
    }
    getAkaByIdAlix(idAlix) {
        return __awaiter(this, void 0, void 0, function* () {
            const aka = yield alixlist_aka_1.Aka.findAll({
                where: {
                    idAlix: { [sequelize_1.Op.eq]: idAlix },
                }
            });
            return aka;
        });
    }
    getAkaByAlix(alix) {
        return __awaiter(this, void 0, void 0, function* () {
            const aka = yield alixlist_aka_1.Aka.findOne({
                where: {
                    aka: { [sequelize_1.Op.eq]: alix },
                }
            });
            return aka;
        });
    }
    getAkaByAlixAndIdAlix(alix, idAlix) {
        return __awaiter(this, void 0, void 0, function* () {
            const aka = yield alixlist_aka_1.Aka.findOne({
                where: {
                    [sequelize_1.Op.and]: [
                        { idAlix: { [sequelize_1.Op.eq]: idAlix } },
                        { aka: { [sequelize_1.Op.eq]: alix } }
                    ]
                }
            });
            return aka;
        });
    }
}
exports.AkaDao = AkaDao;
//# sourceMappingURL=aka.dao.js.map