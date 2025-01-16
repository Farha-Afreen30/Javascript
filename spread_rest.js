const employees = [
  { id: 1, name: "Abi", role: "Developer" },
  { id: 2, name: "Barbie", role: "Designer" },
  { id: 3, name: "Charles", role: "Manager" },
];

// Spread Operator

// Adding a new employee
const newEmployee = { id: 4, name: "Dawood", role: "Tester" };
const updatedEmployees = [...employees, newEmployee];
console.log("Updated Employees List:", updatedEmployees);

// Copy and updation
const employeeupdate = { ...newEmployee, role: "Senior Tester" };
console.log("Updated Employee Role:", employeeupdate);

// Merging
const addition = [
  { id: 5, name: "Eva", role: "HR" },
  { id: 6, name: "Farha", role: "Intern" },
];
const merging = [...employees, ...addition];
console.log("All Employees:", merging);



// Rest Operator

// Extracting and grouping
const [firstEmployee, secondEmployee, ...remainingEmployees] = updatedEmployees;
console.log("First Employee:", firstEmployee);
console.log("Second Employee:", secondEmployee);
console.log("Remaining Employees:", remainingEmployees);

// function with rest operator
function listRoles(...roles) {
  console.log("Roles Provided:", roles);
}

listRoles("Developer", "Designer", "Manager", "Tester", "HR");

// Combining both Spread and Rest in a function
function addEmployee(existingEmployees, ...newEmployees) {
  return [...existingEmployees, ...newEmployees];
}

const combinedEmployees = addEmployee(employees, 
  { id: 7, name: "Annu", role: "Engineer" }, 
  { id: 8, name: "Apoorva", role: "Support" }
);
console.log("Combined Employees List:", combinedEmployees);
