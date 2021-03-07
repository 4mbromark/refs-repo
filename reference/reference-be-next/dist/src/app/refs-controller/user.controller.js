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
exports.UserController = void 0;
const user_master_service_1 = require("../refs-service/master-services/user-master.service");
const common_1 = require("@nestjs/common");
const url_1 = require("../refs-utility/refs-url/url");
const jwt_public_1 = require("../refs-utility/refs-auth/jwt-public");
let UserController = class UserController {
    constructor(userMasterService) {
        this.userMasterService = userMasterService;
    }
    authUser(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userMasterService.authUser(body.uid, body.pwd);
            if (user) {
                res.status(common_1.HttpStatus.OK).send(user);
            }
            else {
                res.status(common_1.HttpStatus.UNAUTHORIZED).send();
            }
        });
    }
    verifyUser(body, res) {
        const user = this.userMasterService.verifyUser(body.token);
        if (user) {
            res.status(common_1.HttpStatus.OK).send(user);
        }
        else {
            res.status(common_1.HttpStatus.UNAUTHORIZED).send();
        }
    }
    getPropic(idUser, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const propic = yield this.userMasterService.getUserPropic(idUser);
            if (propic) {
                res.status(common_1.HttpStatus.OK).send(propic);
            }
            else {
                res.status(common_1.HttpStatus.UNAUTHORIZED).send();
            }
        });
    }
};
__decorate([
    jwt_public_1.Public(),
    common_1.Post(url_1.Url.USER_AUTH),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "authUser", null);
__decorate([
    jwt_public_1.Public(),
    common_1.Post(url_1.Url.USER_VERIFY),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "verifyUser", null);
__decorate([
    common_1.Get(url_1.Url.USER_GETPROPIC),
    __param(0, common_1.Param('idUser')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPropic", null);
UserController = __decorate([
    common_1.Controller(url_1.Url.BASE_REST + url_1.Url.USER),
    __metadata("design:paramtypes", [user_master_service_1.UserMasterService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map