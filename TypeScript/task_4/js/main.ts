console.log("Script chargé !");

// Interface pour le constructeur de la classe StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface décrivant la classe StudentClass
interface Student {
  workOnHomework(): string;
  displayName(): string;
}

// Implémentation de la classe StudentClass
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test de la classe
const student = new StudentClass({ firstName: "John", lastName: "Doe" });

console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working

