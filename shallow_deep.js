const original = {
  name: "Farha",
  skills: ["JavaScript", "HTML"],
};

// shallow copy using spread operator
const shallowCopy = { ...original };

shallowCopy.skills.push("CSS");

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);

const original1 = {
  name: "Afreen",
  skills: ["React", "Vue.js"],
};

// deep copy
const deepCopy = JSON.parse(JSON.stringify(original1))

deepCopy.skills.push("Node.js")

console.log("Original:", original1);
console.log("Deep Copy:", deepCopy);
