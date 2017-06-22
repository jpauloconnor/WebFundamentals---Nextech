
//Bronze
var age = 20;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('Congratulations! You can now vote!');
} else {
  console.log('You have no voice in government!');
}




var timesWeBeatPatriotsLastSeason = 2;
var timesTheyBeatUs = 1;
console.log("       ")

if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.");
} else if (timesTheyBeatUs > timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt, and you guys use deflated balls.");
} else if (timesWeBeatPatriotsLastSeason === timesTheyBeatUs) {
	console.log("They were really lucky.");
} else {
	console.log("Patriots just cheat.")
}