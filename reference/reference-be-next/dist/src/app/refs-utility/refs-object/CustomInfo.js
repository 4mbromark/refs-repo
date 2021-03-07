"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomInfo = void 0;
class CustomInfo {
    constructor(i) {
        this.id = i.id;
        this.type = i.type;
        this.info = i.info.split(";");
        this.contextOrder = i.contextOrder;
    }
}
exports.CustomInfo = CustomInfo;
//# sourceMappingURL=CustomInfo.js.map