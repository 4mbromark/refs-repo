"use strict";
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
exports.CryptService = void 0;
var crpt = require("bcrypt");
var cryptoJS = require("crypto-js");
class CryptService {
    encrypt(ax) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield crpt.hash(ax, 10);
        });
    }
    check(ax, av) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield crpt.compare(ax, av);
        });
    }
    /** @deprecated */
    encrpt(ax) {
        const a = cryptoJS.AES.encrpt(ax, process.env.CRYPT_KEY);
        return a.toString();
    }
    /** @deprecated */
    decrpt(ax) {
        const a = cryptoJS.AES.decrypt(ax, process.env.CRYPT_KEY);
        return a.toString();
    }
}
exports.CryptService = CryptService;
//# sourceMappingURL=crypt.service.js.map