// A callback is a function passed as an argument to another function.

// here we pass a callback that the setTimeout function may call after the set timeout has elapsed
// this lets a calling function decide when to execute a callback function
// used to perform actions after delayed computations
// useful for async events
let id = setTimeout(() => {
  console.log("over 1 second has elapsed");
  setTimeout(() => {
    console.log("2nd inner timeout");
    setTimeout(() => {
      console.log("3rd inner timeout");
    }, 1000);
  }, 1000);
}, 1000);

//using callbacks extensively as above leads to highly indented code that is difficult to read as well as maintain
//this is called callback hell
