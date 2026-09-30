let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Grade function
function calculateGrade(marks) {

    switch (true) {

        case marks >= 80:
            console.log("Grade: A+");
            break;

        case marks >= 70:
            console.log("Grade: B");
            break;

        case marks >= 60:
            console.log("Grade: C");
            break;

        case marks >= 50:
            console.log("Grade: D");
            break;

        default:
            console.log("Grade: FAIL");
    }
}


// Role function
function role(a) {

    if (a == 1) {
        return "student";
    }
    else if (a == 2) {
        return "admin";
    }
    else if (a == 3) {
        return "teacher";
    }
    else {
        return "invalid role";
    }
}


rl.question(
    "Enter role:\n1. Student\n2. Admin\n3. Teacher\nEnter: ",
    (r) => {

        r = Number(r.trim());

        let userRole = role(r);

        console.log("Role:", userRole);


        rl.question("Enter name: ", (name) => {

            name = name.trim();


            if (r == 1) {

                rl.question("Enter marks: ", (m) => {

                    m = Number(m.trim());

                    console.log("Name:", name);

                    calculateGrade(m);


                    // Promise
                    let result = new Promise((resolve, reject) => {

                        if (m >= 50) {
                            resolve("Student passed");
                        }
                        else {
                            reject("Student failed");
                        }

                    });


                    result
                        .then((passed) => {
                            console.log(passed);
                        })
                        .catch((failed) => {
                            console.log(failed);
                        });


                    rl.close();
                });

            }
            else {

                console.log("Name:", name);
                rl.close();

            }

        });

    }
);
