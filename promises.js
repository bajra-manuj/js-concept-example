//using then
// the fetch function returns a priomise
// we use the then method to perform an action if the promise resolves
// response.json() also return a promise so we must use another then method to RESOLVE its result
// finally we can catch the errors if any using the catch method. this handles the REJECT case of promise
// note that we do not need to catch every error one by one
// primise allows us to return early in case of an error and handle it acccordingly
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log("fetching using then") || console.log(json))
  .catch((e) => console.log(e));

console.log(fetch("https://jsonplaceholder.typicode.com/todos/1")); //pending status
//using async
// the await syntax cannot be used at the top level so we must use it inside an async function
// we can handle wait for the promise to resolve using the await keyword
// however we must use a try catch block to catch any error in this case
let getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("fetching using async");
    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
getData();
