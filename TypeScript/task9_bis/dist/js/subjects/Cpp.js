"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpp = void 0;
const Subject_1 = require("./Subject");
class Cpp extends Subject_1.Subject {
    getRequirements() {
        return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher() {
        return this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0
            ? `Available Teacher: ${this.teacher.firstName}`
            : "No available teacher";
    }
}
exports.Cpp = Cpp;
//# sourceMappingURL=Cpp.js.map