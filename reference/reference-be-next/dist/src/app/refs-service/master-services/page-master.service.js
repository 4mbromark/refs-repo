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
exports.PageMasterService = void 0;
const blob_service_1 = require("./../database-services/blob.service");
const service_util_1 = require("./../../refs-utility/refs-util/service-util");
const page_service_1 = require("./../database-services/page.service");
const general_builder_service_1 = require("./../general-builder.service");
const MasterPage_1 = require("../../refs-utility/refs-object/MasterPage");
const CustomTextline_1 = require("../../refs-utility/refs-object/CustomTextline");
const CustomBlob_1 = require("../../refs-utility/refs-object/CustomBlob");
const textline_service_1 = require("../database-services/textline.service");
const board_service_1 = require("../database-services/board.service");
const common_1 = require("@nestjs/common");
let PageMasterService = class PageMasterService {
    constructor(textlineService, blobService, pageService, boardService, builder) {
        this.textlineService = textlineService;
        this.blobService = blobService;
        this.pageService = pageService;
        this.boardService = boardService;
        this.builder = builder;
    }
    getPage(idAlix, code) {
        return __awaiter(this, void 0, void 0, function* () {
            const board = yield this.boardService.getBoardByIdAlix(idAlix);
            let page = null;
            if (board) {
                page = yield this.pageService.getPageByIdBoardAndCode(board.id, code);
            }
            let masterPage = null;
            if (page) {
                const idBoard = page.idBoard;
                const title = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, page.title);
                const subtitle = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, page.subtitle);
                const avatar = yield this.blobService.getBlobByIdBoardAndId(idBoard, page.avatar);
                const image = yield this.blobService.getBlobByIdBoardAndId(idBoard, page.image);
                const finalInfoList = yield this.builder.getFinalInfoList(idBoard, service_util_1.ServiceUtil.getNumberArrayByString(page.infoList));
                const finalButtonList = yield this.builder.getFinalButtonList(idBoard, service_util_1.ServiceUtil.getNumberArrayByString(page.buttonList));
                masterPage = new MasterPage_1.MasterPage(page, title ? new CustomTextline_1.CustomTextline(title) : null, subtitle ? new CustomTextline_1.CustomTextline(subtitle) : null, avatar ? new CustomBlob_1.CustomBlob(avatar) : null, image ? new CustomBlob_1.CustomBlob(image) : null, finalInfoList, finalButtonList);
            }
            return masterPage;
        });
    }
};
PageMasterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [textline_service_1.TextlineService,
        blob_service_1.BlobService,
        page_service_1.PageService,
        board_service_1.BoardService,
        general_builder_service_1.GeneralBuilderService])
], PageMasterService);
exports.PageMasterService = PageMasterService;
//# sourceMappingURL=page-master.service.js.map