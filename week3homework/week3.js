let pizzaToppings = [
  "pineapples",
  "chicken",
  "banana peppers",
  "bbq sauce",
  10,
  99,
  3,
  65,
  32,
  84
];
function greetCustomer() {
  let greeting =
    " Welcome to Peekers Pizza, We offer many great toppings like ";
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`one large thick crust pizza with ${pizzaToppings}`);
}
let myArray = (size, crust, toppings);

function preparePizza(myArray) {
  const myPizzaObject = {
    Size: myArray[0],
    Crust: myArray[1],
    Toppings: []
  };
  let x = 2;
  for (x = 2; x < myArray.length; x++) {
    myPizzaObject.Toppings[x] = myArray[x];
    console.log(myPizzaObject.Toppings[x], x);
  }
}
preparePizza(pizzaToppings);
// function servePizza

// function preparePizza(size, crust, ...toppings) {
//   console.log (10in, thick crust, beef toppings)}
