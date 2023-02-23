/*
Defining 10 different String variables
*/
let item1 = "milk";
let item2 = "eggs";
let item3 = "bread";
let item4 = "cheese";
let item5 = "butter";
let item6 = "yogurt";
let item7 = "cereal";
let item8 = "chicken";
let item9 = "beef";
let item10 = "fish";

/* 
Defining an array that contains the same 10 String variable.
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

console.log(shopping_list);

/*
Editing the first element of the array with "oat milk" instead of "milk".
We are using 0 instead of 1 here since the array data structure is 0 indexed,
which means the index of an array starts from 0.
*/
shopping_list[0] = "oat milk";

console.log(shopping_list);
