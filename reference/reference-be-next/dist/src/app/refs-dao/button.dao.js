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
exports.ButtonDao = void 0;
const sequelize_1 = require("sequelize");
const board_button_1 = require("../refs-utility/refs-db/entity/board-button");
class ButtonDao {
    getButtonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const button = yield board_button_1.Button.findByPk(id);
            return button;
        });
    }
    getButtonListByIdBoardAndIds(idBoard, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const buttonList = yield board_button_1.Button.findAll({
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
            return buttonList;
        });
    }
}
exports.ButtonDao = ButtonDao;
//# sourceMappingURL=button.dao.js.map