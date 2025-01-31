// Define the DirectorInterface interface
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
  }

  // Define the TeacherInterface interface
  interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
  }

// Implement the Director class
class Director implements DirectorInterface {
	workFromHome(): string {
	  return "Working from home";
	}

	getCoffeeBreak(): string {
	  return "Getting a coffee break";
	}

	workDirectorTasks(): string {
	  return "Getting to director tasks";
	}
  }

// Implement the Teacher class
class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return "Cannot work from home";
	}

	getCoffeeBreak(): string {
	  return "Cannot have a break";
	}

	workTeacherTasks(): string {
	  return "Getting to work";
	}
  }

// Function to create an employee
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
	  return new Teacher();
	} else {
	  return new Director();
	}
  }

// Function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
  }

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
	if (isDirector(employee)) {
	  console.log(employee.workDirectorTasks());
	} else {
	  console.log(employee.workTeacherTasks());
	}
  }

// Example usage
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks
