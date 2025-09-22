// console.log("Script chargé !");

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Can only be set during initialization
  readonly lastName: string;  // Can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [key: string]: any; // Allows additional attributes with any type
}

// Create an object implementing the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property
};

// Log the object to console
console.log(teacher3);

// document.addEventListener("DOMContentLoaded", function() {
//   console.log("Script chargé !");
//   console.log(teacher3);
// });
