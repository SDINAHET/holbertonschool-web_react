/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

// import * as Subjects from './subjects'; // Si 'subjects.ts' est le fichier où se trouvent tes classes

// import { Subjects } from "./subjects/Teacher";
// import { Cpp } from "./subjects/Cpp";
// import { Java } from "./subjects/Java";
// import { React } from "./subjects/React";

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const teacher: Subjects.Teacher = {
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
