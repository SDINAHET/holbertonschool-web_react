"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = void 0;
const Subject_1 = require("./Subject");
class React extends Subject_1.Subject {
    getRequirements() {
        return "Here is the list of requirements for React";
    }
    getAvailableTeacher() {
        return this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0
            ? `Available Teacher: ${this.teacher.firstName}`
            : "No available teacher";
    }
}
exports.React = React;
//# sourceMappingURL=React.js.map