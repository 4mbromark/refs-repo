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
exports.GeneralBuilderService = void 0;
const common_1 = require("@nestjs/common");
const CustomBlob_1 = require("../refs-utility/refs-object/CustomBlob");
const CustomButton_1 = require("../refs-utility/refs-object/CustomButton");
const CustomCard_1 = require("../refs-utility/refs-object/CustomCard");
const CustomInfo_1 = require("../refs-utility/refs-object/CustomInfo");
const CustomTextline_1 = require("../refs-utility/refs-object/CustomTextline");
const CustomUserinfo_1 = require("../refs-utility/refs-object/CustomUserinfo");
const service_util_1 = require("../refs-utility/refs-util/service-util");
const blob_service_1 = require("./database-services/blob.service");
const button_service_1 = require("./database-services/button.service");
const card_service_1 = require("./database-services/card.service");
const info_service_1 = require("./database-services/info.service");
const textline_service_1 = require("./database-services/textline.service");
const userinfo_service_1 = require("./database-services/userinfo.service");
let GeneralBuilderService = class GeneralBuilderService {
    constructor(userinfoService, cardService, textlineService, blobService, infoService, buttonService) {
        this.userinfoService = userinfoService;
        this.cardService = cardService;
        this.textlineService = textlineService;
        this.blobService = blobService;
        this.infoService = infoService;
        this.buttonService = buttonService;
    }
    getFinalUserinfo(idBoard) {
        return __awaiter(this, void 0, void 0, function* () {
            const userinfo = yield this.userinfoService.getUserinfoByIdBoardOrCreate(idBoard);
            const sentence = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, userinfo.sentence);
            const profile = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, userinfo.profile);
            const avatar = yield this.blobService.getBlobByIdBoardAndId(idBoard, userinfo.avatar);
            const finalInfoList = yield this.getFinalInfoList(idBoard, service_util_1.ServiceUtil.getNumberArrayByString(userinfo.infoList));
            const finalButtonList = yield this.getFinalButtonList(idBoard, service_util_1.ServiceUtil.getNumberArrayByString(userinfo.buttonList));
            return new CustomUserinfo_1.CustomUserinfo(userinfo, sentence ? new CustomTextline_1.CustomTextline(sentence) : null, profile ? new CustomTextline_1.CustomTextline(profile) : null, avatar ? new CustomBlob_1.CustomBlob(avatar) : null, finalInfoList, finalButtonList);
        });
    }
    getFinalCardList(idBoard) {
        return __awaiter(this, void 0, void 0, function* () {
            const cardList = yield this.cardService.getCardListByIdBoard(idBoard);
            let finalCardList = [];
            for (let card of cardList) {
                const title = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, card.title);
                const subtitle = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, card.subtitle);
                const avatar = yield this.blobService.getBlobByIdBoardAndId(idBoard, card.avatar);
                const image = yield this.blobService.getBlobByIdBoardAndId(idBoard, card.image);
                const finalInfoList = yield this.getFinalInfoList(idBoard, service_util_1.ServiceUtil.getNumberArrayByString(card.infoList));
                const finalButtonList = yield this.getFinalButtonList(idBoard, service_util_1.ServiceUtil.getNumberArrayByString(card.buttonList));
                const finalCard = new CustomCard_1.CustomCard(card, title ? new CustomTextline_1.CustomTextline(title) : null, subtitle ? new CustomTextline_1.CustomTextline(subtitle) : null, avatar ? new CustomBlob_1.CustomBlob(avatar) : null, image ? new CustomBlob_1.CustomBlob(image) : null, finalInfoList, finalButtonList);
                finalCardList.push(finalCard);
            }
            return finalCardList;
        });
    }
    getFinalInfoList(idBoard, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const infoList = yield this.infoService.getInfoListByIdBoardAndIds(idBoard, ids);
            const finalInfoList = [];
            for (let info of infoList) {
                finalInfoList.push(new CustomInfo_1.CustomInfo(info));
            }
            return finalInfoList;
        });
    }
    getFinalButtonList(idBoard, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const buttonList = yield this.buttonService.getButtonListByIdBoardAndIds(idBoard, ids);
            const finalButtonList = [];
            for (let button of buttonList) {
                const title = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, button.title);
                const subtitle = yield this.textlineService.getTextlineByIdBoardAndId(idBoard, button.subtitle);
                const finalButton = new CustomButton_1.CustomButton(button, title ? new CustomTextline_1.CustomTextline(title) : null, subtitle ? new CustomTextline_1.CustomTextline(subtitle) : null);
                finalButtonList.push(finalButton);
            }
            return finalButtonList;
        });
    }
};
GeneralBuilderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [userinfo_service_1.UserinfoService,
        card_service_1.CardService,
        textline_service_1.TextlineService,
        blob_service_1.BlobService,
        info_service_1.InfoService,
        button_service_1.ButtonService])
], GeneralBuilderService);
exports.GeneralBuilderService = GeneralBuilderService;
//# sourceMappingURL=general-builder.service.js.map