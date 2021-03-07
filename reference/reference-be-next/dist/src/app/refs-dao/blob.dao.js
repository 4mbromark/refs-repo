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
exports.BlobDao = void 0;
const sequelize_1 = require("sequelize");
const board_blob_1 = require("../refs-utility/refs-db/entity/board-blob");
class BlobDao {
    getBlobById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = yield board_blob_1.Blob.findByPk(id);
            return blob;
        });
    }
    getBlobByIdBoardAndId(idBoard, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = yield board_blob_1.Blob.findOne({
                where: {
                    [sequelize_1.Op.and]: {
                        idBoard: { [sequelize_1.Op.eq]: idBoard },
                        id: { [sequelize_1.Op.eq]: id }
                    }
                }
            });
            return blob;
        });
    }
    insertBlobByIdBoardAndReturnId(idBoard, file, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = yield board_blob_1.Blob.create({
                idBoard: idBoard,
                file: file,
                type: type
            });
            return blob.id;
        });
    }
}
exports.BlobDao = BlobDao;
//# sourceMappingURL=blob.dao.js.map