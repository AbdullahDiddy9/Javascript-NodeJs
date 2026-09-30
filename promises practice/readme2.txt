README (Batch 2)
================

Yeh folder teen alag Node.js scripts par mushtamil hai. Yeh pehle wale batch
(code1_subject.js, code2_role_department.js) se alag hain.

----------------------------------------
1) code3_addition.js
----------------------------------------
Kaam:
- User se do numbers poochay jate hain (first number, second number).
- Arrow function "add(a, b)" un dono ko add kar ke result show karta hai.

Chalane ka tareeqa:
    node code3_addition.js

----------------------------------------
2) code4_food_status.js
----------------------------------------
Kaam:
- User se poocha jata hai "Is food ready? (true or false)".
- Agar user "true" likhe to Promise resolve ho ke message deta hai:
  "food is ready to eat"
- Agar user "false" ya kuch aur likhe to Promise reject ho ke message deta hai:
  "food is not ready yet"
- .then() aur .catch() se result console par print hota hai.

Chalane ka tareeqa:
    node code4_food_status.js

----------------------------------------
3) code5_role_grade.js
----------------------------------------
Kaam:
- User se role poocha jata hai:
    1 = Student
    2 = Admin
    3 = Teacher
- Phir user ka naam poocha jata hai.
- Agar role "Student" (1) ho to marks bhi poochay jate hain, jis ke baad:
    - calculateGrade() function marks ke hisab se grade deta hai:
        80+   = A+
        70-79 = B
        60-69 = C
        50-59 = D
        50 se kam = FAIL
    - Ek Promise check karti hai ke student pass hua ya fail:
        marks >= 50  -> resolve("Student passed")
        marks < 50   -> reject("Student failed")
      .then()/.catch() se result print hota hai.
- Agar role Admin ya Teacher ho (ya invalid ho), to sirf naam print ho kar
  script khatam ho jati hai.

Chalane ka tareeqa:
    node code5_role_grade.js

----------------------------------------
General Requirements
----------------------------------------
- Node.js installed hona chahiye computer par.
- Terminal/CMD mein is folder mein jayen jahan yeh files hain, phir upar diye
  gaye command se run karen.
- Teeno scripts interactive hain, yani script chalne ke baad terminal mein
  sawal poocha jayega aur type kar ke jawab dena hoga.
