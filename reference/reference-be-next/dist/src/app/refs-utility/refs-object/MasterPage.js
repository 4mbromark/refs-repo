"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterPage = void 0;
class MasterPage {
    constructor(page, t, st, a, i, il, bl) {
        this.id = page.id;
        this.code = page.code;
        this.title = t;
        this.subtitle = st;
        this.avatar = a;
        this.caption = page.caption;
        this.text = page.text;
        this.image = i;
        this.infoList = il;
        this.buttonList = bl;
    }
}
exports.MasterPage = MasterPage;
//# sourceMappingURL=MasterPage.js.map