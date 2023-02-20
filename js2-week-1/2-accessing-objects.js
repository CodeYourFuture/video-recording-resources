const car = {
  brand: "Honda",
  model: "Civic",
  colour: "grey",
  year: 2020,
};

// can't be done because const
// car = {
//   brand: "Volvo",
//   model: "Civic 2",
// };

console.log("Before: ")
console.log(car);

car.numberPlate = "XY12 7TY"; // create new property
car.brand = "Volvo"; // update existing property
delete car.colour; // delete a property

console.log("After");
console.log(car);
