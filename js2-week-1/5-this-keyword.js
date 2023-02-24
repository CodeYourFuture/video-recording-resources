/**
 * In JavaScript, the "this" keyword refers to an object.
 * The this keyword refers to different objects
 * depending on how it is used:
 */
function helloThis() {
  console.log(`Inside helloThis funct, "this" keyword is:`);
  console.log(this);
}

// helloThis();

function printName() {
  console.log(`Student's name is ${this.fullName}`);
}

const student = {
  fullName: "John Smith", // string
  age: 10, // number
  printThis: function () {
    console.log(`Inside student object "this" points to:`);
    console.log(this);
  },
  printName: printName,
}

student.printName();
