let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Describe your role\n1.Employee\n2.Admin\n3.Supervisor: ", (role) => {
  role = Number(role.trim());

  rl.question("Select your department:\n1.IT\n2.HR\n3.Management: ", (dept) => {
    dept = Number(dept.trim());

    switch (role) {
      case 1:
        switch (dept) {
          case 1:
            console.log("Employee -> IT department");
            break;
          case 2:
            console.log("Employee -> HR department");
            break;
          case 3:
            console.log("Employee -> Management department");
            break;
          default:
            console.log("Invalid department");
        }
        break;

      case 2:
        switch (dept) {
          case 1:
            console.log("Admin -> IT department");
            break;
          case 2:
            console.log("Admin -> HR department");
            break;
          case 3:
            console.log("Admin -> Management department");
            break;
          default:
            console.log("Invalid department");
        }
        break;

      case 3:
        switch (dept) {
          case 1:
            console.log("Supervisor -> IT department");
            break;
          case 2:
            console.log("Supervisor -> HR department");
            break;
          case 3:
            console.log("Supervisor -> Management department");
            break;
          default:
            console.log("Invalid department");
        }
        break;

      default:
        console.log("Invalid role");
    }

    rl.close();   // ✅ sirf ek dafa, sab se andar
  });
});
