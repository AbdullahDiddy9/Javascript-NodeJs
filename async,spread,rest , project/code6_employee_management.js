let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getEmp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("emp loaded");
        }, 4000);
    });
}

function showemployee() {
    for (let { id, name, department, salary } of employees) {
        console.log(
            `ID : ${id}, NAME : ${name}, DEPARTMENT : ${department}, SALARY : ${salary}`
        );
    }
}

function calculateSalary(...number) {
    let total = 0;

    for (let n of number) {
        total += n;
    }

    return total;
}

let employees = [
    {
        id: 101,
        name: "Ali",
        department: "IT",
        salary: 80000
    },
    {
        id: 102,
        name: "Ahmed",
        department: "HR",
        salary: 70000
    },
    {
        id: 103,
        name: "Usman",
        department: "IT",
        salary: 90000
    }
];


// Find Ali
let alidata = employees.find((emp) => emp.name === "Ali");

// Create updated copy
let updatedEmp = {
    ...alidata,
    salary: 100000
};

// Replace old Ali with updated Ali
let index = employees.findIndex((emp) => emp.id === 101);

employees[index] = updatedEmp;


// Take employee ID from user
rl.question("Enter EMP id: ", (empid) => {

    empid = Number(empid.trim());

    let employee = employees.find((emp) => emp.id === empid);

    if (employee) {
        console.log(employee);
    }
    else {
        console.log("employee not found");
    }

    rl.close();
});


// Promise + async/await
async function testemp() {

    try {
        let result = await getEmp();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

testemp();


// Show all employees
showemployee();


// Calculate total salaries
console.log(
    "addition of all salaries are: " +
    calculateSalary(80000, 70000, 90000)
);

console.log(alidata);
console.log(updatedEmp);
