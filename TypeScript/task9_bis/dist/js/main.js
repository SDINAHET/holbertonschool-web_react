"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cpp_1 = require("./subjects/Cpp");
const Java_1 = require("./subjects/Java");
const React_1 = require("./subjects/React");
const cpp = new Cpp_1.Cpp();
const java = new Java_1.Java();
const react = new React_1.React();
const teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
    experienceTeachingJava: 5,
    experienceTeachingReact: 0,
};
cpp.setTeacher(teacher);
java.setTeacher(teacher);
react.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map