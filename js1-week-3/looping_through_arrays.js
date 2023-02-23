/*
Defining an array variable.
*/
let shopping_list = [
  "milk",
  "eggs",
  "bread",
  "cheese",
  "butter",
  "yogurt",
  "cereal",
  "chicken",
  "beef",
  "fish",
];

/* 
Looping the array using the traditional for loop.
*/
for (let index = 0; index < shopping_list.length; index++) {
  const element = shopping_list[index];
  console.log(element);
}

/* 
Looping the array using the for of loop.
*/
for (const element of shopping_list) {
  console.log(element);
}

/* 
Using the index number of array values while looping them in a for of loop using the Array.prototype.entries() function
*/
for (const [index, element] of shopping_list.entries()) {
  console.log(index, element);
}
