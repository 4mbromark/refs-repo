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
exports.InfoDao = void 0;
const sequelize_1 = require("sequelize");
const board_info_1 = require("../refs-utility/refs-db/entity/board-info");
class InfoDao {
    getInfoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield board_info_1.Info.findByPk(id);
            return info;
        });
    }
    getInfoListByIdBoardAndIds(idBoard, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const infoList = yield board_info_1.Info.findAll({
                where: {
                    [sequelize_1.Op.and]: {
                        idBoard: { [sequelize_1.Op.eq]: idBoard },
                        id: { [sequelize_1.Op.in]: ids }
                    }
                },
                order: [
                    ['contextOrder', 'ASC']
                ]
            });
            return infoList;
        });
    }
}
exports.InfoDao = InfoDao;
//# sourceMappingURL=info.dao.js.map