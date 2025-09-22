import { Teacher } from "./Teacher";

export class Subject {
  protected teacher: Teacher;

  constructor() {
    this.teacher = { firstName: "", lastName: "" }; // Initialisation par défaut
  }

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}

