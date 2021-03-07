"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.BoardMasterService = void 0;
const general_builder_service_1 = require("./../general-builder.service");
const MasterBoard_1 = require("../../refs-utility/refs-object/MasterBoard");
const board_service_1 = require("../database-services/board.service");
const common_1 = require("@nestjs/common");
let BoardMasterService = class BoardMasterService {
    constructor(boardService, builder) {
        this.boardService = boardService;
        this.builder = builder;
    }
    getBoard(idAlix) {
        return __awaiter(this, void 0, void 0, function* () {
            const board = yield this.boardService.getBoardByIdAlixOrCreate(idAlix);
            const idBoard = board.id;
            const finalUserinfo = yield this.builder.getFinalUserinfo(idBoard);
            const finalCardList = yield this.builder.getFinalCardList(idBoard);
            return new MasterBoard_1.MasterBoard(board, finalUserinfo, finalCardList);
        });
    }
};
BoardMasterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [board_service_1.BoardService,
        general_builder_service_1.GeneralBuilderService])
], BoardMasterService);
exports.BoardMasterService = BoardMasterService;
//# sourceMappingURL=board-master.service.js.map