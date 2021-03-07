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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.PageController = void 0;
const page_master_service_1 = require("./../refs-service/master-services/page-master.service");
const common_1 = require("@nestjs/common");
const url_1 = require("../refs-utility/refs-url/url");
const jwt_public_1 = require("../refs-utility/refs-auth/jwt-public");
let PageController = class PageController {
    constructor(pageMasterService) {
        this.pageMasterService = pageMasterService;
    }
    getPage(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield this.pageMasterService.getPage(body.idAlix, body.code);
            if (page) {
                res.status(common_1.HttpStatus.OK).send(page);
            }
            else {
                res.status(common_1.HttpStatus.NOT_FOUND).send();
            }
        });
    }
};
__decorate([
    jwt_public_1.Public(),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "getPage", null);
PageController = __decorate([
    common_1.Controller(url_1.Url.BASE_REST + url_1.Url.PAGE),
    __metadata("design:paramtypes", [page_master_service_1.PageMasterService])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map