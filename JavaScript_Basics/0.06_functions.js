//functions

//Declaration
function hello(){
	console.log("Hello!!!!");
}

hello();


var hey = function(){
	console.log("hey!");
}

hey();


var printLaurissasName = function(){
	console.log("Laurissa");
}

printLaurissasName();

function laurissaName(){
	console.log("Laurissa");
}

laurissaName();


function addTwos(){
	var x = 2;
	var y = 2;
	console.log(x + y);
}

addTwos();
addTwos();
addTwos();

function multiplyTenTimesTwo(){
	var x = 10;
	var y = 2;
	console.log(x * y);
}

multiplyTenTimesTwo();



function numberEntered(x){
	console.log("The number entered is: ", x);
}

numberEntered(5);
numberEntered(7);
numberEntered(100000);


function addAnyTwoNumbers(x, y){
	console.log("The sum is: ", x + y);
}

addAnyTwoNumbers(17, 1000);
addAnyTwoNumbers(15, 29);




//Write a function that takes in a first 
//and last name and prints a fullname
// to the console.

function fullName(first, last){
	console.log("Welcome, " + first + " " + last);
}

fullName("Paul", "O'Connor");
fullName("Alexander", " Andrews");


function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	console.log(details);
	return details;	
}
petNameAndBreed("Rufus", "Weiner Dog");


//Write a function that calculates the 
//price of 10 candy bars after tax 
//in Indiana.
//Allow us to enter more than one.
//Sales Tax 0.07

function costCalculator (cost, amount, tax) {
	var totalCost
	totalCost = cost * amount * ((100 - tax) * 0.01);
	console.log("The cost of " + amount + " candy bars will be $" + totalCost.toFixed(2) + ".");	
}

costCalculator(0.99, 10, 7);




function calculatePriceIndiana(quantity, price){
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	console.log(totalTax);
	var totalPrice = totalTax + quantity * price;
	return totalPrice;
}

console.log("Chipotle:", calculatePriceIndiana(17, 5));



