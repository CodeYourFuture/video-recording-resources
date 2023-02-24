// This refers to the window
console.log(this);

// This refers to the window object
function helloThis() {
  console.log("Inside a global function, this is ");
  console.log(this);
}

// Call the function helloThis to check results
helloThis();

// This refers to the child object. Will console log 20
var student = {
  studentName: "John Smith",
  age: 10,
  displayThisStudent: function () {
    console.log(this);
  },
  displayName: function () {
    console.log(this.studentName);
  },
};

// This refers to the investment object. Will log 5750
var instructor = {
  instructorName: "Jane Doe",
  displayThisInstructor: function () {
    console.log(this);
  },
  displayName: function () {
    console.log(this.instructorName);
  },
};

// Call the object methods to check results
student.displayThisStudent();
instructor.displayThisInstructor();

// display the names
student.displayName();
instructor.displayName();
