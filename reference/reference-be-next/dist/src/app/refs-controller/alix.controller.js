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
exports.AlixController = void 0;
const alix_master_service_1 = require("./../refs-service/master-services/alix-master.service");
const common_1 = require("@nestjs/common");
const url_1 = require("../refs-utility/refs-url/url");
const jwt_public_1 = require("../refs-utility/refs-auth/jwt-public");
let AlixController = class AlixController {
    constructor(alixMasterService) {
        this.alixMasterService = alixMasterService;
    }
    getAlix(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alix = yield this.alixMasterService.getAlix(body.alix);
            if (alix) {
                res.status(common_1.HttpStatus.OK).send(alix);
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
], AlixController.prototype, "getAlix", null);
AlixController = __decorate([
    common_1.Controller(url_1.Url.BASE_REST + url_1.Url.ALIX),
    __metadata("design:paramtypes", [alix_master_service_1.AlixMasterService])
], AlixController);
exports.AlixController = AlixController;
//# sourceMappingURL=alix.controller.js.map