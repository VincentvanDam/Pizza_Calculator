var myOl = document.getElementById("pizza");
var myUl = document.getElementById("toppings");
var pizzaValue = 0;
var totalTopping = 0;
var totalPrice = 0;

// all pizza's
var pizzaList = [
    {name: 'Hawaii', img: 'img/hawaii.png', price: 4},
    {name: 'Salami', img: 'img/salami.png', price: 5},
    {name: 'Cheeseburger', img: 'img/cheeseburger.png', price: 6}];

// all toppings
var toppings = [
    {name: 'Extra ui', price: 1},
    {name: 'Extra kaas', price: 1.50},
    {name: 'Extra saus', price: 1}
];

// show all the pizza's in ul element
for (var i = 0; i < pizzaList.length; i++){
    var pizza = document.createElement("li");
    pizza.pizzaName = pizzaList[i].name;
    pizza.pizzaPrice = pizzaList[i].price;
    myOl.appendChild(pizza);
    //pizza.onclick = function(event){showInfo(event, 2)};
    pizza.onclick = showInfo;

    pizza.appendChild(document.createTextNode(pizzaList[i].name));
}

// show all the toppings
for (var x = 0; x < toppings.length; x++){
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    var br = document.createElement("br");
    checkbox.id = toppings[x].name + "Checkbox";
    checkbox.type = "checkbox";
    checkbox.value = toppings[x].price;
    checkbox.onchange = function () {toppingCost(this.value)};
    myUl.appendChild(checkbox);
    myUl.appendChild(label);
    myUl.appendChild(br);
    label.appendChild(document.createTextNode(toppings[x].name));

}

// show the info of specific pizza
function showInfo(event){
    document.getElementById("toppings").style.display = "block";
    pizzaValue = 0;
    pizzaList.forEach(function (pizza) {
        if (pizza.name == event.target.pizzaName) {
            pizzaValue = pizzaValue + event.target.pizzaPrice;
            document.getElementById("selected").innerHTML = '<p>' + 'Naam:' + pizza.name + '</p>' + '<img src="' + pizza.img + '">' + '<p id="selected_text">' + pizzaValue + ' euro'+ '</p>';
        }
    });
}

//checks toppings and counts price
function toppingCost() {
    totalTopping = 0;
    for(var i = 0; i < toppings.length; i++ ) {
        var toppingCheckboxId = toppings[i].name + "Checkbox";
        var toppingCheckboxElement = document.getElementById(toppingCheckboxId);
        if(toppingCheckboxElement.checked){
            totalTopping = totalTopping + toppings[i].price;
        }
        totalPrice = pizzaValue + totalTopping;
    }
    document.getElementById("selected_text").innerHTML = totalPrice + ' euro';
}

