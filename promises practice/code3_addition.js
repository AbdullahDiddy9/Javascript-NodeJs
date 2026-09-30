let add = (a, b) => a + b;

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: \n", (x) => {
  x = Number(x.trim());  

  rl.question("Enter second number: ", (y) => {
    y = Number(y.trim());   

    console.log(add(x, y));
    rl.close();
  });
});
