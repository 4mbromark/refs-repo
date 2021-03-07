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
exports.AkaService = void 0;
const common_1 = require("@nestjs/common");
const aka_dao_1 = require("../../refs-dao/aka.dao");
let AkaService = class AkaService {
    constructor(akaDao) {
        this.akaDao = akaDao;
    }
    getAkaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.akaDao.getAkaById(id);
        });
    }
    getAkaByIdAlix(idAlix) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.akaDao.getAkaByIdAlix(idAlix);
        });
    }
    getAkaByAlix(alix) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.akaDao.getAkaByAlix(alix);
        });
    }
    getAkaByAlixAndIdAlix(alix, idAlix) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.akaDao.getAkaByAlixAndIdAlix(alix, idAlix);
        });
    }
    getAkaAlixListByIdAlix(idAlix) {
        return __awaiter(this, void 0, void 0, function* () {
            const aka = yield this.getAkaByIdAlix(idAlix);
            let akaList = [];
            aka.forEach(a => {
                akaList.push(a.aka);
            });
            return akaList;
        });
    }
};
AkaService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [aka_dao_1.AkaDao])
], AkaService);
exports.AkaService = AkaService;
//# sourceMappingURL=aka.service.js.map