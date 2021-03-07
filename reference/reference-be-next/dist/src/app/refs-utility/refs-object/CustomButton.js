"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomButton = void 0;
class CustomButton {
    constructor(button, t, st) {
        this.id = button.id;
        this.title = t;
        this.subtitle = st;
        this.type = button.type;
        this.action = button.action;
        this.border = button.border;
        this.radius = button.radius;
        this.background = button.background;
        this.contextOrder = button.contextOrder;
    }
}
exports.CustomButton = CustomButton;
//# sourceMappingURL=CustomButton.js.map