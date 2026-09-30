README (Batch 3)
=================

This folder contains six separate Node.js scripts, independent from the
previous batches. Topics covered: Promises, async/await, destructuring,
spread/rest operators, and array methods.

----------------------------------------
1) code1_marks_async.js
----------------------------------------
What it does:
- getMarks() returns a Promise that resolves with "85 marks" (since the
  "marks" variable holds a truthy value "85").
- The async function final() awaits getMarks() inside a try/catch block
  and logs the result, or the error if the Promise were rejected.

Run with:
    node code1_marks_async.js

----------------------------------------
2) code2_login_password.js
----------------------------------------
What it does:
- Asks the user to type a password twice ("Generate password" and
  "Write password").
- login() returns a Promise: if both entries match, it resolves with
  "Correct pass"; otherwise it rejects with "Wrong pass".
- The async function test() awaits login() and prints the result or the
  error using try/catch.

Run with:
    node code2_login_password.js

----------------------------------------
3) code3_orderfood_async.js
----------------------------------------
What it does:
- orderfood() returns a Promise that resolves with "pizza is ready" after
  a 2-second delay (using setTimeout).
- The async function test() logs "order is placed", awaits orderfood(),
  then logs the result followed by "eating pizza".

Run with:
    node code3_orderfood_async.js

----------------------------------------
4) code4_destructuring.js
----------------------------------------
What it does:
- Demonstrates object destructuring by extracting name, department, and
  salary from an "employee" object.
- Shows that reassigning the destructured "name" variable does not affect
  the original object.

Run with:
    node code4_destructuring.js

----------------------------------------
5) code5_spread_operator.js
----------------------------------------
What it does:
- Demonstrates the spread operator with arrays: merges "numbers" and "b"
  arrays along with an extra value (40) into "newnumbers".
- Demonstrates the spread operator with objects: copies properties from
  "employee" into a new object "newemployee" while adding a "salary"
  property.

Run with:
    node code5_spread_operator.js

----------------------------------------
6) code6_employee_management.js
----------------------------------------
What it does:
- Defines an array of employee objects (id, name, department, salary).
- showemployee(): loops through all employees using destructuring inside
  a for...of loop and prints their details.
- calculateSalary(...number): uses rest parameters to accept any number
  of salary values and returns their total.
- Uses Array.find() to locate Ali's record, then uses the spread operator
  to create an updated copy of Ali's object with a new salary (100000).
- Uses Array.findIndex() to replace the old Ali record in the employees
  array with the updated one.
- Asks the user to enter an employee ID via terminal input, then searches
  for and displays that employee's record (or "employee not found").
- getEmp() returns a Promise that resolves after a 4-second delay; the
  async function testemp() awaits it and logs the result.
- Finally logs the total of all salaries, Ali's original data, and Ali's
  updated data.

Run with:
    node code6_employee_management.js

----------------------------------------
General Requirements
----------------------------------------
- Node.js must be installed on your computer.
- Open a terminal/CMD in the folder containing these files, then run each
  script using the commands above.
- Scripts that use readline (code2 and code6) are interactive and will
  prompt you for input in the terminal.
