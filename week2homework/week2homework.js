const pizzaPlace = "Peekers";

let numberOfToppings = 2;
console.log(typeof pizzaPlace, pizzaPlace);

console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `hey,welcome to ${pizzaPlace}, and we offer ${numberOfToppings} toppings`
);
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
}
console.log("A whole lot of pizza.");
