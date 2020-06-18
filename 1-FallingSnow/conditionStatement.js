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
