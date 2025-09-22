// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface
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

    toString(): string {
        return "Director";
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

    toString(): string {
        return "Teacher";
    }
}

// Function to create an Employee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Function to check if an employee is a Director
type Employee = Director | Teacher;
function isDirector(employee: Employee): employee is Director {
    return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Employee): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Define a String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class
function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
}

// Expected results
// console.log(createEmployee(200).toString()); // Teacher
// console.log(createEmployee(1000).toString()); // Director
// console.log(createEmployee("$500").toString()); // Director

// executeWork(createEmployee(200)); // Getting to work
// executeWork(createEmployee(1000)); // Getting to director tasks

console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History

