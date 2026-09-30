let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function login() {

    return new Promise((resolve, reject) => {

        rl.question("Generate password: ", (pass) => {

            pass = pass.trim();

            rl.question("Write password: ", (pass1) => {

                pass1 = pass1.trim();

                if (pass1 === pass) {
                    resolve("Correct pass");
                }
                else {
                    reject("Wrong pass");
                }

                rl.close();
            });
        });
    });
}

async function test() {

    try {
        let result = await login();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

test();
