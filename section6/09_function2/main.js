/** section6 65 アロー関数省略記法練習 */
// const hello = function(userName = 'Tom') {
//   console.log(userName);
// }
// hello();

// const hello = (userName, age) => `${userName} ${age}`;
// const arry = [1, 2, 3, 4, 5, 6];
// arry.forEach((value) => console.log(value));

/** section6 66 コールバック関数練習 */
// function hello(callback, lastname) {
//   console.log(callback);
//   console.log("hello " + callback(lastname));
// }

// function getName() {
//   return "しろくま";
// }

// const getFirstName = function (name) {
//   return "shiro" + name;
// };

// hello(getFirstName, "kuma");

/** section6 66 コールバック関数練習2 */
// function doSomething(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// function multiply(a, b) {
//   return a * b;
// }

// function plus(a, b) {
//   return a + b;
// }

// doSomething(2, 2, multiply);
// doSomething(2, 3, plus);

/** section6 67 コールバック関数練習 */
// const array = [1, 2, 3, 4, 5];

// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// }

// function log(val) {
//   console.log(val);
// }

// function double(val) {
//   val = val * 2;
//   log(val);
// }

// forEach(array, double);

/** section6 68 forよりforEachが簡潔 */
// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   const v = array[i];
//   console.log(v);
// }

// array.forEach(function (v) {
//   console.log(v);
// });

// array.forEach(v => console.log(v));

/** section6 69 reduceメソッド練習 */
// const array = [1, 2, 3, 4, 5];

// // accuは前のループの戻り値が入る
// array.reduce(function (accu, curr) {
//   console.log(accu, curr);
//   return accu * curr;
// }, 10);

// const str = "animation";
// const strArray = str.split("");
// console.log(strArray);

// const result = strArray.reduce((accu, curr) => {
//   return accu + "<" + curr + ">";
// }, "");
// console.log(result);

// const result2 = strArray.reduce((accu, curr) => {
//   return `${accu}<${curr}>`;
// }, "");
// console.log(result2);

/** section6 70 reduceメソッド練習2 */
const str = "animation";
const strArray = str.split("");

function tag(accu, curr) {
  console.log(accu, curr);
  return `${accu}<${curr}>`;
}

function reduce(array, callback, defaultValue) {
  let accu = defaultValue;
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    accu = callback(accu, curr);
  }
  return accu;
}

const result = reduce(strArray, tag, "");
console.log(result);
