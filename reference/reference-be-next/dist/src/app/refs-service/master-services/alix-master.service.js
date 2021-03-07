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
exports.AlixMasterService = void 0;
const MasterAlix_1 = require("./../../refs-utility/refs-object/MasterAlix");
const aka_service_1 = require("../database-services/aka.service");
const alix_service_1 = require("../database-services/alix.service");
const common_1 = require("@nestjs/common");
let AlixMasterService = class AlixMasterService {
    constructor(alixService, akaService) {
        this.alixService = alixService;
        this.akaService = akaService;
    }
    getAlix(a) {
        return __awaiter(this, void 0, void 0, function* () {
            let alix = yield this.alixService.getAlixByAlix(a);
            if (!alix) {
                const aka = yield this.akaService.getAkaByAlix(a);
                if (aka) {
                    alix = yield this.alixService.getAlixById(aka.idAlix);
                }
            }
            let masterAlix = null;
            if (alix) {
                const akaList = yield this.akaService.getAkaAlixListByIdAlix(alix.id);
                masterAlix = new MasterAlix_1.MasterAlix(alix, akaList);
            }
            return masterAlix;
        });
    }
};
AlixMasterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [alix_service_1.AlixService,
        aka_service_1.AkaService])
], AlixMasterService);
exports.AlixMasterService = AlixMasterService;
//# sourceMappingURL=alix-master.service.js.map