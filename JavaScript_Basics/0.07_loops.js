
//for Loops
// iteration

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

	//Start	  //Condition //Operation
for (var i = 1; i < 101; i++){
	console.log(i);
}

// starts at 5 & prints to 10

for (var i = 5; i <= 10; i++){
	console.log(i);
}

// Start at 10, count to 1

// for (var i=10; i <= 10; i--){
// 	console.log(i);
// }


for(var i = 0; i < 30; i+=5){
	console.log(i);
}

//Write a for loop that counts to 100
// by 5s.
//At 50 print the word "Fifty" 
//to the console.

for(var i=0; i<=100; i+=5){
	if(i===50){
		console.log("Fifty")
	} else {
		console.log(i);
	}
}


