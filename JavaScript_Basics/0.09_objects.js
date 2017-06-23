
//Object Literal

var player = {
	//PROPERTIES
	name 	       : "",
	life 		   : 100,
	damage  	   : 0, //attackPoints
	hasSniperRifle : true,
	hasSword	   : false,
	rank 		   : ["soldier", "mage", "spartan", "barbarian"],

	//METHODS
	
	fightMe        : function(target){
		console.log("Would you care to fight " + target.name + "?");
	},

	accept        : function(target){
		console.log("Sure, I will fight you, " + target.name + "!");
	},
	showLife      : function(player){
		console.log(player.name + " has " + this.life + " life");
	},
	attack 		   : function(target){
		//THis is all one line
		console.log(this.name + " attacks " 
			+ target.name + 
			" for " + 
			this.damage);
		
		target.life -= this.damage;
	},

	swatWithSword : function() {
		var damage = 25*this.damage;
		console.log(this + " did " + damage + " damage to " + target + " with the sword." )
		target.life -= damage;
	},

	pickedUpSword : function() {
		if (this.hasSword == true)
		{
			console.log(this.name + " picked up the sword.")
		}
	},

	snipe: function(target){
		var damage = 20*this.damage;
		console.log(this.name + ' attacks for ' + damage + " damage " + target.name + " with the sniper rifle.");
		target.life -= damage;
	},	

	gameOver : function(player) {
		var lifeLevel = player.life;
		if (lifeLevel <= 0) {
			console.log(player.name + ' has ' + lifeLevel + " life. The game is over.");
		} 
	},

	rankBonus : function(player) {
		var rankLevel = player.rank;
		if (rankLevel === "Captain") {
			console.log(this + " is a " + rankLevel + " and is 10x stronger.");
			player.damage = player.damage * 10;
		} else if (rankLevel = "Soldier"){
			console.log(this + " is a " + rankLevel + " and hit power is normal.");
		} else {
			console.log("He is not alive.");
		}
	}
};

var saul = Object.create(player);
saul.name = "Saul";
saul.life = 120;
saul.damage = 20;
saul.hasSniperRifle = true;
saul.hasSword = true;
saul.pickedUpSword();
saul.rank = "spartan";

var paul = Object.create(player);
paul.name = "Paul";
paul.life = 121;
paul.damage = 21;
paul.hasSniperRifle = true;
paul.rank = "barbarian";


saul.fightMe(paul);
paul.accept(saul);
paul.attack(saul);
saul.showLife(saul);
saul.attack(paul);
paul.showLife(paul);
paul.snipe(saul);
saul.gameOver(saul);
