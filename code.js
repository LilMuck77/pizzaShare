function sharePizza()
{
    //number of people sharing + parse
    var numberOfPeople = prompt("How many people are sharing today?");
    numberOfPeople = parseFloat(numberOfPeople);

    //number of pizzas + parse
    var pizzaAmount = prompt("A regular cheese pizza cost $15. Each topping cost an extra $1.25" +
        " How many pizzas do you want to order?");
    pizzaAmount = parseFloat(pizzaAmount);

    //number of toppings + parse
    var toppingAmount = prompt("How many toppings do you want to order?");
    toppingAmount = parseFloat(toppingAmount);

    //total cost of pizza
    var totalCostPizza = pizzaAmount * 15;


    //total cost of toppings
    var totalCostToppings = toppingAmount * 1.25

    //total cost together
    var finalCost = totalCostPizza + totalCostToppings;

    //total cost per person
    var costPerPerson = finalCost / numberOfPeople;

    //display totals
    alert(`The number of people sharing today is ${numberOfPeople}.`);
    alert(`The total cost of the pizza(s) is $${totalCostPizza}.`);
    alert(`The total cost of the topping(s) is $${totalCostToppings}.`);
    alert(`The final total is $${finalCost}.`);
    alert(`The cost per person is $${costPerPerson}. `);
    alert("Thank you for your order.")










}