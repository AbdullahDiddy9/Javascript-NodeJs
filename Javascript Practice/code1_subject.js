let readline = require ('readline');
let r1= readline.createInterface({
    input: process.stdin,
    output : process.stdout
});
r1.question("1 for math\n 2 for physics\n 3 for chemistry\n 4 for urdu\n 5 for english :", (subject) => {
  subject = Number(subject.trim())

  switch (subject) {
    case 1:
      console.log("You got MATHS");
      break;
    case 2:
      console.log("YOU GOT PHYSICS");
      break;
    case 3:
      console.log("YOU GOT chemistry");
      break;
    case 4:
     console.log("YOU GOT urdu");
        break;
    case 5:
        console.log("YOU GOT ENGLISH");
        break;
    default:
      console.log("invalid input");
  }

  r1.close();
});
