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
  this.toppings = toppings;
  this.size = size;
  this.price;
}


Pizza.prototype.totalPrice = function() {
  this.price = 0;
  console.log(this.size)
  if (this.size === "Large" || "Medium") {
    this.price += 25;
  } else if (this.size === "Small") {
    this.price += 15;
  }
  console.log(this.toppings)
  if (this.toppings == "onion" || "tomato" || "bell pepper" || "mushroom" || "pineapple") {
    this.price += .50
  } else if (this.toppings == "roasted garlic" || "olives" || "pineapple") {
    this.price += .75
  }
  console.log(this.meat)
  if (this.meat == "pepperoni" || "chicken" || "sausage" || "bacon") {
    this.price += 1.00
  } else if (this.meat ==="steak") {
    this.price += 2.50
  }
  console.log(this.cheese)
  if (this.cheese == "cheddar" || "mozzarella" || "parmesan") {
    this.price += 1.50
  } else if (this.cheese === "gouda" || "goat cheese") {
    this.price += 2
  }
  console.log(this.price)
  return this.price
}


//UI Logic
$(document).ready(function(){
  $('form#choices').submit(function(event){
    event.preventDefault();
    
    let size = $('#size').val();
    let meat = $('#meat').val();
    let toppings = $('input[name=spinach]:checked').val();
    let cheese = $('#cheese').val();
 
    let thePizza = new Pizza(meat, cheese, toppings, size)

    total = thePizza.totalPrice();
    console.log(thePizza)
    //$('#total').text("$" + total)
    $('#total').text("$" + total)
  });
});