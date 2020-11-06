//Tests
//Describe: Pizza();

//Test: It should correctly return the type of Pizza chosen with toppings.
//Expect: Pizza(meat, cheese, toppings, size).toEqual(Pizza with pepperoni, mozzarella, olives, large)

//Test: It should correctly return the price of Pizza based on the toppings and size
//Expect: Pizza(Pepperoni, Large, Olives).toEqual($21.50)



//Business Logic for Pizzas

function Pizza(meat, cheese, toppings, size) {
  this.meat = meat;
  this.cheese = cheese;
  this. toppings = toppings;
  this.size = size;
  this.price = 0;
}

function toppingChoices() { 
  let choiceToppings = [];
  for (let i = 0; i < $ ("input[name=toppings]").length; i++) {
    if($("input[name=toppings]")[i].checked) {
      choiceToppings.push($("input[name=toppings]")[i]);
    }
  }
  return choiceToppings;
}
console.log(choiceToppings);