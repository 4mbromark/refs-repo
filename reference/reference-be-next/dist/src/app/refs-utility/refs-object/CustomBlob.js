"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBlob = void 0;
class CustomBlob {
    constructor(blob) {
        this.id = blob.id;
        this.type = blob.type;
        this.file = Buffer.from(blob.file).toString();
    }
}
exports.CustomBlob = CustomBlob;
//# sourceMappingURL=CustomBlob.js.map