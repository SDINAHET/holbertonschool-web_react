// Define the interface for the constructor arguments
interface StudentConstructor {
	firstName: string;
	lastName: string;
  }

  // Define the interface for the StudentClass
  interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
  }

  // Implement the class StudentClass
  class StudentClass implements StudentClassInterface {
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

  // Example usage
  const student = new StudentClass({ firstName: "John", lastName: "Doe" });
  console.log(student.displayName()); // Output: John
  console.log(student.workOnHomework()); // Output: Currently working
