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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngularMiddleware = void 0;
const common_1 = require("@nestjs/common");
const path_1 = __importDefault(require("path"));
const url_1 = require("../refs-url/url");
let AngularMiddleware = class AngularMiddleware {
    use(req, res, next) {
        const { url } = req;
        if (!(url.indexOf(url_1.Url.BASE_REST) === 1)) {
            res.sendFile(path_1.default.resolve('../reference-fe/dist/reference-fe/index.html'));
        }
        next();
    }
};
__decorate([
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], AngularMiddleware.prototype, "use", null);
AngularMiddleware = __decorate([
    common_1.Injectable()
], AngularMiddleware);
exports.AngularMiddleware = AngularMiddleware;
//# sourceMappingURL=angular.middleware.js.map