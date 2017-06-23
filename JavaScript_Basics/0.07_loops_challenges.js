//Bronze

for(var i = 0; i<=20; i+=2){
	console.log(i);
}

console.log("                         ")
console.log("                         ")
console.log("   *********Silver Challenge*******                      ")
console.log("                         ")
console.log("                         ")


//Silver with while loop
var counter = 0;
while(counter < 100){
	counter+=25;
	if(counter === 50){
		console.log("There's halfway");
	} else {
		console.log(counter);
	}
}

var score = 0;
while(score < 10){
	score++;
	console.log("Your score: ", score);
	if(score === 10){
		console.log("You won!!!");
	}
}







//Silver with for loop
for (var i = 0; i < 101; i += 25) {
	if (i == 50) {
		console.log(i + " " + "Halfway there!")
	} else {
	console.log(i);
	}
}



for (var i = 1; i < 11; i++) {
	//console.log(i);
	if (i == 10) {
		console.log("ten");
	} else if (i == 9) {
		console.log("nine");
	} else {
		console.log(i);
	}
}


////////////////////////////////For loop 

var loading=false

for (var i =0 ; i<101; i++) {
 if (i < 100) {
 	loading=true
 if (i >100) {
 	loading=false
  }
 }
}
////////////////////////////////While loop 
while( loading = true ){

	if()
		console.log("Loading...")
	}else{  //////////////////////////something wrong with this else 
		console.log("Completed")
	}
}




