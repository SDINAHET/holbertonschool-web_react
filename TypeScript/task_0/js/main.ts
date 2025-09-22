// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }

  // Create two students
  const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "New York",
  };

  const student2: Student = {
	firstName: "Jane",
	lastName: "Smith",
	age: 22,
	location: "San Francisco",
  };

  // Store the students in an array
  const studentsList: Student[] = [student1, student2];

  // Create a table and append it to the DOM
  const table = document.createElement("table");
  const tableHeaderRow = document.createElement("tr");

  // Add headers to the table
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  tableHeaderRow.appendChild(headerFirstName);
  tableHeaderRow.appendChild(headerLocation);
  table.appendChild(tableHeaderRow);

  // Populate the table with student data
  studentsList.forEach((student) => {
	const row = document.createElement("tr");
	const firstNameCell = document.createElement("td");
	const locationCell = document.createElement("td");

	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	table.appendChild(row);
  });

  // Append the table to the body
  document.body.appendChild(table);
