const fnExampleObj = {
  name: "mk",
  printName: function () {
    console.log(this.name);
  },
  // binds to the object
  printThis: () => {
    console.log(this);
  },
};

const arrowExampleObj = {
  name: "mk",
  printName: () => {
    console.log(this.name);
  },
  // doesnt bind to the object and instead binds to the global window object (in browser)
  printThis: () => {
    console.log(this);
  },
};

console.log("using regualar function inside an object: ");
console.log("printName:");
fnExampleObj.printName(); //mk
console.log("print this:");
fnExampleObj.printThis(); //mk

console.log("using arrow function inside an object: ");
console.log("printName:");
arrowExampleObj.printName(); //undefined
console.log("print this:");
arrowExampleObj.printThis(); //undefined
