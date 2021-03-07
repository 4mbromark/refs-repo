"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterUserWithToken = void 0;
const MasterUser_1 = require("./MasterUser");
class MasterUserWithToken extends MasterUser_1.MasterUser {
    constructor(user, tk) {
        super(user);
        this.token = tk;
    }
}
exports.MasterUserWithToken = MasterUserWithToken;
//# sourceMappingURL=MasterUserWithToken.js.map