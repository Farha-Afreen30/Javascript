const employees = [
  { id: 1, name: "Alice", salary: 4000 },
  { id: 2, name: "Bob", salary: 7000 },
  { id: 3, name: "Charlie", salary: 6000 },
];

// 1. filter
const highEarner = employees.filter(employee => employee.salary > 5000);
console.log("High Earners:", highEarner);

// 2. map
const employeeNames = employees.map(employee => employee.name);
console.log("Employee Names:", employeeNames);

// 3. reduce
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalSalary);

// 4. Implicit return
const greet = name => `Welcome, ${name}!`;
console.log(greet("Alice"));
