let numbers = [10,20,30];
let b = [32,12,44,11];
let newnumbers = [...numbers,40,...b];
console.log(newnumbers);

let employee={
    name : "ali",
    age : 23
};

let newemployee={
    salary : 80000,
    ...employee
};
console.log(newemployee);
