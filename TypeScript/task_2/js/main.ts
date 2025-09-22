// Define the Teacher interface
interface Teacher {
	readonly firstName: string; // Can only be set during initialization
	readonly lastName: string;  // Can only be set during initialization
	fullTimeEmployee: boolean;
	yearsOfExperience?: number; // Optional property
	location: string;
	[key: string]: any; // Allows additional attributes with any type
  }

  // Extend Teacher interface to create Directors interface
  interface Directors extends Teacher {
	numberOfReports: number; // Additional required attribute for Directors
  }

  // Create an object using the Directors interface
  const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };

  // Print the director object
  console.log(director1);
