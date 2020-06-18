let a = 5;
let b = a;

if (a > 5) {
  console.log(`ค่าของ ${b} มีค่ามากกว่า 5`);
} else {
  console.log(`ค่าของ ${b} มีค่าน้อยกว่า 5`);
}

// practise condition statement 
function myGrade(grade) {
  if ((grade > 80) & (grade <= 100)) {
    console.log(`Your grade is "A"`);
  } else if ((grade > 70) & (grade <= 80)) {
    console.log(`Your grade is "B"`);
  }
}

myGrade(80);

// Random number between 1-10
function run () {
  for (i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random()*10) + 1;
    return randomNumber;
  }
}

// Call the function run then Loop random number ten time 
function runRandomNumber () {
  for (i = 0; i < 10; i++) {
    let running = run();
    console.log(running);
  }
}

runRandomNumber();



