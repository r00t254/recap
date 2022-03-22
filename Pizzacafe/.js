{$(Document).ready(function);
var size =$(".size option:select").val();
var crust =$("crust option:select").val();
var toppins =$("toppins option:select").val();
var ordernumber =$("ordernumber option:select").val();
var quantity =parseInt(size)*parseInt(crust)*parseInt(toppins)

constructor(size,toppins,crust,order,quantity)
this.size = size;
this.toppins = toppins;
this.crust = crust;
this.order = ordernumber;
this.quantity = quantity;}
$("#pizzaSize").html($(".pizzaSize option:selected").text() + " - " + pizzaSize);
  $("#pizzaTopping").html($(".pizzaTopping option:selected").text() + " - " + pizzaTopping);
  $("#pizzaCrust").html($(".pizzaCrust option:selected").text() + " - " + pizzaCrust);
  $("#quantity").html(quantity);
  $('.add-btn').click(function()
   {
    var Size = $(".pizzaSize option:selected").val();
    var Topping = $(".pizzaTopping option:selected").val();
    var Crust = $(".pizzaCrust option:selected").val();
    var quantity = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzacrust);
    order = order + 1;
    amountt = amountt + total;
    var newPizza = new pizza(pizzaSize, pizzaTopping, pizzaCrust, total, quantity);
    var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="pizzaSize">' + $(".pizzaSize option:selected").text() + " - " + newPizza.size + '</td><td id="pizzaTopping">' + $(".pizzaTopping option:selected").text() + " - " + newPizza.toppings + '</td><td id="pizzaCrust">' + $(".pizzaCrust option:selected").text() + " - " + newPizza.crust + '</td><td id="quantity">' + newPizza.quantity + '</td></tr>'
    $("#pizza").append(newRow);
  });
  $(".btn").click(function() {
     var answer= prompt("get order delivered and have it hot at ksh @150 enter yes or no")
      if (answer =="yes") {var location=prompt("enter your location")
      alert("your order will get to you in a few minutes at " + location + "your total amount is " +(amountt + 50))}
 });if (pizzaDelivery === 0) {
  prompt("Enter the place where Your pizza will be delivered.");
  alert("Thank for choosing pizza-haochi your order will be delivered in the next 20 minutes with a total cost of ksh" + total2.initialCost());

} else if (pizzaDelivery === 1) {

  alert("Thank you for choosing pizza Inn your cost is ksh " + total2.initialCost());

}


});













