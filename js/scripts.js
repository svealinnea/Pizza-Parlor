//Tests
//Describe: Pizza();

//Test: It should correctly return the type of Pizza chosen with toppings.
//Expect: Pizza(meat, cheese, toppings, size).toEqual(Pizza with pepperoni, mozzarella, olives, large)

//Test: It should correctly return the price of Pizza based on the toppings and size
//Expect: Pizza(Pepperoni, Large, Olives).toEqual($21.50)


//Business Logic for Pizza Parlor

function PizzaParlor() {
  this.pizza = [];
}
PizzaParlor.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

//Business Logic for Pizzas

function Pizza(meat, cheese, toppings, size) {
  this.meat = meat;
  this.cheese = cheese;
  this. toppings = toppings;
  this.size = size;
}

