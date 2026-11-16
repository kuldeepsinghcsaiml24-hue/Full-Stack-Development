const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("Alice"));
console.log(greet());        


// 1. Object Destructuring
const user = {
  id: 1,
  name: "Ava",
  role: "admin",
  age: 30,
};

const { name, ...others } = user;

console.log(name);   // "Ava"
console.log(others); // { id: 1, role: "admin", age: 30 }


// 2. Array Destructuring
const nums = [1, 2, 3, 4];

const [first, ...rest] = nums;

console.log(first); // 1
console.log(rest);  // [2, 3, 4]