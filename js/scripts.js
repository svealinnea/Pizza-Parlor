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

// function toppingChoices() { 
//   let choiceToppings = [];
//   for (let i = 0; i < $ ("input[name=toppings]").length; i++) {
//     if($("input[name=toppings]")[i].checked) {
//       choiceToppings.push($("input[name=toppings]")[i]);
//     }
//   }
//   return choiceToppings;
// }
// console.log(choiceToppings); 


Pizza.prototype.price = function() {
  this.price = 2; 

  if (this.size == "large") {
    this.price + 20;
  } else if (this.size == "medium") {
    this.price + 15;
  } else if (this.size == "small") {
    this.price + 10;
  }

  if (this.toppings == "onion" || "tomato" || "bell pepper" || "mushroom" || "pineapple") {
    this.price += .50
  } else if (this.toppings == "roasted garlic" || "olives" || "pineapple") {
    this.price += .75
  }

  if (this.meat == "pepperoni" || "chicken" || "sausage" || "bacon") {
    this.price + 1.00
  } else if (this.meat ==="steak") {
    this.price + 2.50
  }
  return this.price
}


//UI Logic
$(document).ready(function(){
  $('form#choices').submit(function(event){
    event.preventDefault();
    let size = $('input[name=size]:checked').val();
    let meat = $('input[name=meat]:checked').val();
    let toppings = $('input[name=toppings]:checked').val();
    let cheese = $('input[name=cheese]:checked').val();

    let thePizza = new Pizza(meat,cheese, toppings, size)

    total = thePizza.price();

    $('#total').append("$" + total)
  });
});
