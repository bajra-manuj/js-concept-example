let arr = [1, 2, 3, 4, 10];

let reduced = arr.reduce((acc, a) => acc + a);
console.log(reduced); // 20

let evenNums = arr.filter((a) => a % 2 == 0);
console.log(evenNums); // [2, 4, 10]

let sorted = arr.sort(); // []
console.log(sorted); // [1, 10, 2, 3, 4] sorts after converting all elems to ascii

let sortedDes = arr.sort((a, z) => z - a); //sorts and mutates
console.log(sortedDes); // [(10, 4, 3, 2, 1)];

console.log(arr.includes(1)); //true

console.log(arr.find((e) => e == 2)); // 2 as 2 is in array

// arr.forEach((elem) => console.log(elem)); //console.log each elemnet in array

arr.splice(2, 0, 7, 8); //add elems
console.log(arr); // [10, 4, 7, 8, 3, 2, 1];

//deletes from arr
let deleted = arr.splice(2, 2);
console.log(deleted); // [7,8]
console.log(arr); // [(10, 4, 3, 2, 1)];

//concat
let arr2 = [].concat(arr);
console.log(arr2); // same as arr

//push
arr.push(0); //apend to last
console.log(arr); // [(10, 4, 3, 2, 1, 0)];

arr.pop(); // remove from last
console.log(arr); // [(10, 4, 3, 2, 1)];

arr.unshift(11); //insert at beginning
console.log(arr); // [(11, 10, 4, 3, 2, 1)];

arr.shift(); // remove from first
console.log(arr); // [(10, 4, 3, 2, 1)];
