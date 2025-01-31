import { Subject } from "./Subject";

export class Java extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    return this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0
      ? `Available Teacher: ${this.teacher.firstName}`
      : "No available teacher";
  }
}

