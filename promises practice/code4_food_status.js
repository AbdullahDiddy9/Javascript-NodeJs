let food_status = new Promise((resolve, reject) => {

    let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Is food ready? (true or false): ", (result) => {
        result = result.toLowerCase().trim();

        let foodReady = (result === "true");  

        if (foodReady) {
            resolve("food is ready to eat");    
        }
        else {
            reject("food is not ready yet");    
        }

        rl.close();   
    });   

});

food_status
    .then((m1) => {
        console.log(m1);
    })
    .catch((m2) => {
        console.log(m2);
    });
