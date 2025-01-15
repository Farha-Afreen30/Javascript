const employeeMap = new Map();

//1.set()
employeeMap.set("e1", { name: "Alice", role: "Developer" });
employeeMap.set("e2", { name: "Bob", role: "Tester" });
employeeMap.set("e3", { name: "Charlie", role: "Manager" });

console.log("Initial Map:");
console.log(employeeMap);

// 2.get()
console.log("\nGet details of employee e2:");
console.log(employeeMap.get("e2"));

// 3.has()
console.log(employeeMap.has("e3"));

// 4.keys()
for (const key of employeeMap.keys()) {
  console.log(key);
}

// 5.value()
for (const value of employeeMap.values()) {
  console.log(value);
 }

//6.entries()
for (const [key, value] of employeeMap.entries()) {
  console.log(`Key: ${key}, Value:`, value);
}

// 7.forEach()
employeeMap.forEach((value, key) => {
  console.log(`Key: ${key}, Name: ${value.name}, Role: ${value.role}`);
});

// 8.delete()
console.log("\nDelete key e2:");
employeeMap.delete("e2");
console.log(employeeMap);

// 9.size
console.log("\nSize of the Map:");
console.log(employeeMap.size);

// 10.clear()
console.log("\nClear the Map:");
employeeMap.clear();
console.log(employeeMap);
