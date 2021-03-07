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
exports.UserMasterService = void 0;
const crypt_service_1 = require("./../crypt.service");
const extra_service_1 = require("./../database-services/extra.service");
const user_service_1 = require("./../database-services/user.service");
const auth_service_1 = require("./../auth.service");
const common_1 = require("@nestjs/common");
const MasterUser_1 = require("../../refs-utility/refs-object/MasterUser");
const MasterUserWithToken_1 = require("../../refs-utility/refs-object/MasterUserWithToken");
let UserMasterService = class UserMasterService {
    constructor(authService, cryptService, userService, extraService) {
        this.authService = authService;
        this.cryptService = cryptService;
        this.userService = userService;
        this.extraService = extraService;
    }
    authUser(uid, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUserByUser(uid);
            let masterUserWithToken = null;
            if (user) {
                const word = yield this.cryptService.check(pwd, user.password);
                console.log(yield this.cryptService.encrypt(pwd));
                if (word) {
                    masterUserWithToken = this.buildMasterUserWithToken(user);
                }
            }
            return masterUserWithToken;
        });
    }
    /** @deprecated */
    authUserWithPassword(uid, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const word = this.cryptService.encrpt(pwd);
            const user = yield this.userService.getUserByUserAndPassword(uid, word);
            let masterUserWithToken = null;
            if (user) {
                masterUserWithToken = this.buildMasterUserWithToken(user);
            }
            return masterUserWithToken;
        });
    }
    verifyUser(token) {
        return this.authService.verifyToken(token);
    }
    getUserPropic(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const extra = yield this.extraService.getExtraByIdUser(idUser);
            return Buffer.from(extra.propic).toString();
        });
    }
    buildMasterUserWithToken(user) {
        const masterUser = new MasterUser_1.MasterUser(user);
        const token = this.authService.getToken(masterUser);
        return new MasterUserWithToken_1.MasterUserWithToken(user, token);
    }
};
UserMasterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        crypt_service_1.CryptService,
        user_service_1.UserService,
        extra_service_1.ExtraService])
], UserMasterService);
exports.UserMasterService = UserMasterService;
//# sourceMappingURL=user-master.service.js.map