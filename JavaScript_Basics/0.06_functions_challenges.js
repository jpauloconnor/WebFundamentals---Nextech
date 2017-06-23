
//BRONZE
function printCityState(city,state){
	var cityState="I am from "+ city + state;
	console.log(cityState)
}

printCityState("Indianapolis","Indiana");

//SILVER
function printBills(rent, wireless, water, electricity){
	var totalBills = rent + wireless + water + electricity;
	console.log(totalBills);
}


printBills(500, 30, 30, 30);


//GOLD
function printOddOrEven(x) {
	if (x % 2 === 0) {
		console.log("The number is even")
	} else {
		console.log("The number is odd")
	}
}
printOddOrEven(11);




