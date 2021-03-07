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
exports.CardDao = void 0;
const sequelize_1 = require("sequelize");
const board_card_1 = require("../refs-utility/refs-db/entity/board-card");
class CardDao {
    getCardById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const card = yield board_card_1.Card.findByPk(id);
            return card;
        });
    }
    getCardListByIdBoard(idBoard) {
        return __awaiter(this, void 0, void 0, function* () {
            const cardList = yield board_card_1.Card.findAll({
                where: {
                    idBoard: { [sequelize_1.Op.eq]: idBoard }
                },
                order: [
                    ['contextOrder', 'ASC']
                ]
            });
            return cardList;
        });
    }
}
exports.CardDao = CardDao;
//# sourceMappingURL=card.dao.js.map