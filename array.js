// Employee records array
const employees = [
  { id: 1, name: "Alice", salary: 50000, department: "HR" },
  { id: 2, name: "Bob", salary: 60000, department: "IT" },
  { id: 3, name: "Charlie", salary: 70000, department: "Finance" },
  { id: 4, name: "David", salary: 80000, department: "IT" },
  { id: 5, name: "Eve", salary: 55000, department: "HR" }
];

console.log(employees.length);

// 1. map
const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);

// 2. push
employees.push({ id: 6, name: "Frank", salary: 65000, department: "Marketing" });
console.log("Employees after Adding Frank:", employees);

// 3. find
const highEarner = employees.find(emp => emp.salary > 60000);
console.log("First High Earner:", highEarner);

// 4. filter
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", itEmployees);

// 5. forEach
console.log("Employee Details:");
employees.forEach(emp => console.log(`ID: ${emp.id}, Name: ${emp.name}, Salary: ${emp.salary}`));

// 6. includes
const departments = employees.map(emp => emp.department);
const hasMarketing = departments.includes("Marketing");
console.log("Does the company have a Marketing department?", hasMarketing);

// 7. reduce
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total Salary of All Employees:", totalSalary);

// 8. pop
const removedEmployee = employees.pop();
console.log("Removed Employee:", removedEmployee);
console.log("Employees after Removal:", employees);

// 9. shift
const firstEmployee = employees.shift();
console.log("Removed First Employee:", firstEmployee);
console.log("Employees after First Removal:", employees);

// 10. unshift
employees.unshift(
  { id: 7, name: "Grace", salary: 90000, department: "Finance" },
  { id: 8, name: "Hank", salary: 48000, department: "IT" }
);
console.log("Employees after Adding new ones:", employees);

// 11. some (Checking if any employee earns more than 75,000)
const HighEarner = employees.some(emp => emp.salary > 75000);
console.log("Does the company have any high earners?", HighEarner);

