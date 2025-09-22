// Define the Teacher interface
interface Teacher {
	readonly firstName: string; // Can only be set during initialization
	readonly lastName: string;  // Can only be set during initialization
	fullTimeEmployee: boolean;
	yearsOfExperience?: number; // Optional property
	location: string;
	[key: string]: any; // Allows additional attributes with any type
  }

  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
	numberOfReports: number; // Additional required attribute for Directors
  }

  // Example usage of Teacher
  const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false, // Additional property
  };
  console.log(teacher3);

  // Example usage of Directors
  const director1: Directors = {
	firstName: 'Jane',
	lastName: 'Smith',
	fullTimeEmployee: true,
	location: 'Paris',
	numberOfReports: 10,
  };
  console.log(director1);

  // Define the interface for the printTeacher function
  interface printTeacherFunction {
	(firstName: string, lastName: string): string;
  }

  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
  };

  // Example usage of printTeacher
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
