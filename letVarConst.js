{
  var VARiable = 1;
  let LETiable = 1;
  const CONSTiable = 1;
  LETiable = 2;
  // CONSTiable = 2; //error: const cant be reassigned.
}

console.log(VARiable); // 1  as VARiable is function scoped
// console.log(LETiable); //out of scope as let and const are block scoped
// console.log(CONSTiable); //out of scope
