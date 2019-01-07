var myOl = document.getElementById("pizza");
var myUl = document.getElementById("toppings");
var sizeDiv = document.getElementById("sizes");
var sliceDiv = document.getElementById("slices");
var pizzaValue = 0;
var totalTopping = 0;
var totalPrice = 0;


// All pizza's
var pizzaList = [
    {name: 'Hawaii', img: 'img/hawaii.png', price: 4},
    {name: 'Salami', img: 'img/salami.png', price: 5},
    {name: 'Cheeseburger', img: 'img/cheeseburger.png', price: 6}];

// All toppings
var toppings = [
    {name: 'Extra ui', price: 1},
    {name: 'Extra kaas', price: 1.50},
    {name: 'Extra saus', price: 1}
];

// All sizes
var sizes = [
    {name: 'Normaal', factor: 1},
    {name: 'Medium', factor: 1.2},
    {name: 'Groot', factor: 1.4},
    {name: 'Kingsize', factor: 2},
];

// All slices
var slices = [
    {name: 'Hele pizza', factor: 1},
    {name: 'Halve pizza', factor: 2},
    {name: 'Kwart pizza', factor: 4},
    ];

// Show all the pizza's in ul element
for (var i = 0; i < pizzaList.length; i++){
    var pizza = document.createElement("li");
    pizza.pizzaName = pizzaList[i].name;
    pizza.pizzaPrice = pizzaList[i].price;
    myOl.appendChild(pizza);
    //pizza.onclick = function(event){showInfo(event, 2)};
    pizza.onclick = showInfo;

    pizza.appendChild(document.createTextNode(pizzaList[i].name));
}

// Show all the toppings
for (var x = 0; x < toppings.length; x++){
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    var br = document.createElement("br");
    checkbox.id = toppings[x].name + "Checkbox";
    checkbox.type = "checkbox";
    checkbox.value = toppings[x].price;
    checkbox.onchange = toppingCost;
    myUl.appendChild(checkbox);
    myUl.appendChild(label);
    myUl.appendChild(br);
    label.appendChild(document.createTextNode(toppings[x].name));

}

// Show all the sizes
for (var y = 0; y < sizes.length; y++){
    var size = document.createElement("input");
    var sizeName = document.createElement("label");
    var space = document.createElement("br");
    size.name = "size";
    size.type = "radio";
    size.value = sizes[y].factor;
    size.onchange = selectSize;
    sizeDiv.appendChild(size);
    sizeDiv.appendChild(sizeName);
    sizeDiv.appendChild(space);
    sizeName.appendChild(document.createTextNode(sizes[y].name));
}

// Shows all the slice options
for (var z = 0; z < slices.length; z++){
    var slice = document.createElement("input");
    var sliceName = document.createElement("label");
    slice.name = "slice";
    slice.type = "radio";
    slice.value = slices[z].factor;
    slice.onchange = selectSlice;
    sliceDiv.appendChild(slice);
    sliceDiv.appendChild(sliceName);
    sliceDiv.appendChild(document.createTextNode(slices[z].name));
}


// show the info of specific pizza
function showInfo(event){
    document.getElementById("sizes").style.display = "block";
    pizzaList.forEach(function (pizza) {
        if (pizza.name == event.target.pizzaName) {
            pizzaValue = event.target.pizzaPrice;
            document.getElementById("selected").innerHTML = '<p>' + 'Naam:' + pizza.name + '</p>' + '<img src="' + pizza.img + '">' + '<p id="selected_text">' + pizzaValue + ' euro'+ '</p>';
        }
    });
}


// Select a pizza size
function selectSize(event) {
    document.getElementById("toppings").style.display = "block";
    document.getElementById("slices").style.display = "block";
    totalPrice = pizzaValue * event.target.value;
    document.getElementById("selected_text").innerHTML = totalPrice.toFixed(2) + ' euro';
}


//Checks toppings and counts price
function toppingCost() {
    totalTopping = 0;
    for(var i = 0; i < toppings.length; i++ ) {
        var toppingCheckboxId = toppings[i].name + "Checkbox";
        var toppingCheckboxElement = document.getElementById(toppingCheckboxId);
        if(toppingCheckboxElement.checked){
            totalTopping = totalTopping + toppings[i].price;
            totalPrice = totalPrice + totalTopping;
        }
    }
    document.getElementById("selected_text").innerHTML = totalPrice.toFixed(2) + ' euro';
}

// Calculate price by slice
function selectSlice(event) {
    totalPrice = totalPrice / event.target.value;
    document.getElementById("selected_text").innerHTML = totalPrice.toFixed(2) + ' euro';
}


