// 1. add()
const set1 = new Set();
set1.add(1);
set1.add(2);
console.log(set1);

// 2. clear()
set1.clear();
console.log(set1);

// 3. delete()
const set2 = new Set([1, 2, 3]);
set2.delete(2);
console.log(set2); 

// 4. difference()
const set3 = new Set([1, 2, 3, 4]);
const set4 = new Set([3, 4, 5, 6]);
console.log(set3.difference(set4));

// 5. entries()
const set5 = new Set([1, 2, 3]);
const iterator1 = set5.entries();

for (const entry of iterator1) {
  console.log(entry);

// 6. forEach()
set5.forEach(value => {
    console.log(value);
});

// 7. has()
console.log(set5.has(2)); 
console.log(set5.has(4));

// 8. intersection()
// set3 = new Set([1, 2, 3, 4]);
// set4 = new Set([3, 4, 5, 6]);
console.log(set3.intersection(set4));

// 9. isSubsetOf()
const set6 = new Set([1, 2]);
const set7 = new Set([1, 2, 3, 4]);
console.log(set6.isSubsetOf(set7)); 

// 10. isSupersetOf()
console.log(set7.isSupersetOf(set6));

// 11. union()
// set3 = new Set([1, 2, 3, 4]);
// set4 = new Set([3, 4, 5, 6]);
console.log(set3.union(set4)); 
