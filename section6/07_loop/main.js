/** section6 61-62 */
// const array = [1,2,3,4,5,6];

// for(let i = 0; i < array.length; i++) {
//     console.log(i);
// }

// for(let i in array) {
//     console.log(i);
// }

// for(let v of array) {
//     console.log(v);
// }

/** section6 63 */
const todos = [
  {
    id: 1,
    title: "Go to school",
    completed: true,
  },
  {
    id: 2,
    title: "Go to museum",
    completed: true,
  },
  {
    id: 3,
    title: "Go shopping",
    completed: false,
  },
];

// for (let i = 0; i < todos.length; i++) {
//     let todo = todos[i];
//     if (todo.completed === true) {
//         console.log(todo.title);
//     }
// }

for (let todo of todos) {
  if (todo.completed === true) {
    console.log(todo.title);
  }
}
