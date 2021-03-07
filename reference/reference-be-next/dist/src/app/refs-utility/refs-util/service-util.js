"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUtil = void 0;
class ServiceUtil {
    static getNumberArrayByString(s) {
        const idNumber = [];
        if (s) {
            const idString = s.split(';');
            for (let id of idString) {
                idNumber.push(parseInt(id));
            }
        }
        return idNumber;
    }
}
exports.ServiceUtil = ServiceUtil;
//# sourceMappingURL=service-util.js.map