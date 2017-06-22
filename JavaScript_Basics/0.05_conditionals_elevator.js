

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = false;
var elevatorIsStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up!");
} else {
	console.log("Going down");
}

if(elevatorBroken === true){
	console.log("Bummer, let's take the stairs.");
} else {
	console.log("Which floor are we on?");
}

if(elevatorIsStuckWhileWeAreOnIt){
	console.log("Oh no! We are stuck!");
}
	

if(elevatorBroken || elevatorDown){
	console.log("Oh no!!!");
}

if(elevatorNumber === 13 && elevatorIsStuckWhileWeAreOnIt){
	console.log("This is not going to be a good day.");
}

