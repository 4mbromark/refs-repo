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
exports.PageDao = void 0;
const sequelize_1 = require("sequelize");
const board_page_1 = require("../refs-utility/refs-db/entity/board-page");
class PageDao {
    getPageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield board_page_1.Page.findByPk(id);
            return page;
        });
    }
    getPageByIdBoardAndId(idBoard, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield board_page_1.Page.findOne({
                where: {
                    [sequelize_1.Op.and]: {
                        idBoard: { [sequelize_1.Op.eq]: idBoard },
                        id: { [sequelize_1.Op.eq]: id }
                    }
                }
            });
            return page;
        });
    }
    getPageByIdBoardAndCode(idBoard, code) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield board_page_1.Page.findOne({
                where: {
                    [sequelize_1.Op.and]: {
                        idBoard: { [sequelize_1.Op.eq]: idBoard },
                        code: { [sequelize_1.Op.eq]: code }
                    }
                }
            });
            return page;
        });
    }
}
exports.PageDao = PageDao;
//# sourceMappingURL=page.dao.js.map