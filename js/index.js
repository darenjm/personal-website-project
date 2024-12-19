console.log("Hello, World!");

console.log("Thbis is my portfolio project");

console.log("Start");

setTimeout(() => {
  console.log("Task 1 (Callback Queue)");
}, 0);

Promise.resolve().then(() => {
  console.log("Task 2 (Microtask Queue)");
});

console.log("End");