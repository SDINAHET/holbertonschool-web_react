/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
// import * as Subjects from './subjects'; // Si 'subjects.ts' est le fichier où se trouvent tes classes
// import { Subjects } from "./subjects/Teacher";
// import { Cpp } from "./subjects/Cpp";
// import { Java } from "./subjects/Java";
// import { React } from "./subjects/React";
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var teacher = {
    firstName: 'John',
    lastName: 'Doe',
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