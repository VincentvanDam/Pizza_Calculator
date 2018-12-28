var myOl = document.getElementById("pizza");
var pizzaValue = 0;

// all pizza's
var pizzaList = [
    {name: 'Hawaii', img: 'img/hawaii.png', price: 4},
    {name: 'Salami', img: 'img/salami.png', price: 5},
    {name: 'Cheeseburger', img: 'img/cheeseburger.png', price: 6}];

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

// show the info of specific pizza
function showInfo(event){
    pizzaValue = 0;
    pizzaList.forEach(function (pizza) {
        if (pizza.name == event.target.pizzaName) {
            pizzaValue = pizzaValue + event.target.pizzaPrice;
            document.getElementById("selected").innerHTML = '<p>' + 'Naam:' + pizza.name + '</p>' + '<img src="' + pizza.img + '">' + '<p id="selected_text">' + pizzaValue + ' euro'+ '</p>';
        }
    });
}
