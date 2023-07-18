// destructuring performed using the spread operation (...)
let arr = [1, 2, 3];
let afterDestructure = [...arr, 4];
console.log(afterDestructure); // [1, 2, 3, 4];

let obj = {
  a: 1,
  b: "hello",
};
let objAfterDestructure = { ...obj, c: "world" };
console.log(objAfterDestructure); // { a: 1, b: 'hello', c: 'world' }
