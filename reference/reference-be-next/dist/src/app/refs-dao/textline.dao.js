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
exports.TextlineDao = void 0;
const board_textline_1 = require("./../refs-utility/refs-db/entity/board-textline");
const sequelize_1 = require("sequelize");
class TextlineDao {
    getTextlineById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const textline = yield board_textline_1.Textline.findByPk(id);
            return textline;
        });
    }
    getTextlineByIdBoardAndId(idBoard, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const textline = yield board_textline_1.Textline.findOne({
                where: {
                    [sequelize_1.Op.and]: {
                        idBoard: { [sequelize_1.Op.eq]: idBoard },
                        id: { [sequelize_1.Op.eq]: id }
                    }
                }
            });
            return textline;
        });
    }
}
exports.TextlineDao = TextlineDao;
//# sourceMappingURL=textline.dao.js.map