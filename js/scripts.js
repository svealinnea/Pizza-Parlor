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
  
  if (this.size == "large") {
    this.price += 25;
  } else if (this.size == "medium") {
    this.price += 20;
  } else if (this.size === "small") {
    this.price += 15;
  }

  this.toppings.forEach(val => {
    if (['onion', 'tomato', 'bell pepper', 'mushroom'].indexOf(val) != -1) {
      this.price += .50
    } else if (['roasted garlic', 'olives', 'pineapple'].indexOf(val) != -1) {
      this.price += .75
    }
  });
 
  if (this.meat == "pepperoni" || this.meat == "chicken" || this.meat == "sausage" || this.meat == "bacon") {
    this.price += 1.00
  } else if (this.meat == "steak") {
    this.price += 2.50
  }
 
  if (this.cheese == "cheddar" || this.cheese == "mozzarella" || this.cheese == "parmesan") {
    this.price += 1.50
  } else if (this.cheese == "gouda" || this.cheese == "goat cheese") {
    this.price += 2
  }
 
  return this.price
}


//UI Logic
$(document).ready(function(){
  $('form#choices').submit(function(event){
    event.preventDefault();

    let toppings = [];
    $('input[name=toppings]:checked').each(function () {
      toppings.push($(this).val());
    });

    let size = $('#size').val();
    let meat = $('#meat').val();
    let cheese = $('#cheese').val();
 
    let thePizza = new Pizza(meat, cheese, toppings, size)

    yourPizza = Pizza();
    total = thePizza.totalPrice();
    $('#total').text("$" + total)
  });
});