//Andisheh Bassiri
//SDI 1
//Jan2013
//Project3
//Project 2 expanded  

//JSON DATA

var json = {
	"foods": {
		"eggs": {
			"cooktime": 5,
			"cooktimeunits": "minutes",
			"calories": 50,
			"calorieunits": "per egg"
		},
		"bacon":{
			"cooktime": 10,
			"cooktimeunits": "minutes",
			"calories": 100,
			"calorieunits": "per egg"
		},
	},
}

//Global Variables

var familyEating = ["Meaghan", "Omar", "Andisheh"]
var drinkOrder = ["Orange Juice", "Carrot Juice", "Milk"];
var eggOrder = [2, 1, 3];
var baconOrder = [3, 1, 2];
var startBreakfast = 7;


//Functions

var say = function(message){
	console.log(message);
};

var familyMember = function(name){ 
	var who = name;
	
	return {
		name: who,
		eggs: 0,
		bacon: 0,
		drink: "",
		foodInBelly: 0,
		foodInMouth: 0,

		bite: function(){
			this.foodInMouth += 1
		},
		chewSwallow: function(){
			//this.foodInMouth -= 1
			this.foodInBelly += 1;
		},
		fillBelly: function(){
			var i = this.eggs + this.bacon;
			var i2 = this.foodInMouth;
			while(i > 0){
				this.bite();
				this.bite();
				while(i2 > 0){
					this.chewSwallow();
					say("chew");
					i2--;
				}
				i--;
			}
		},

	}
};

var oven = {
	working: true,
	knob: {
		style : "Rotary",
		color: "black",
		settings: ["Bake", "Convection Bake", "Broil"],
	},
	getCookSettings: function(){
		var ovenInfo = [];
		ovenInfo.push = this.knob.settings;
		return ovenInfo;
	},
};

var seatNumChecker = function(numberOfSeats, seatsTaken){
	var seatsAvailable;

	if(numberOfSeats > seatsTaken){
		seatsAvailable = numberOfSeats - seatsTaken;
	}else{
		seatsAvailable = 0;
	}

	return seatsAvailable;
};

var famReady = function(famEating){
	var  ready   = true,
		notReady = false;

	if(famEating.length === 3){
		return ready;
	}else{
		return notReady;
	};
};

var readyRollCall = function(boolean){
	if (boolean){
		var i = 0
		while (i < familyEating.length){
		say(familyEating[i] + " is ready for breakfast");
		i++
		}
	} else {
			say("Some one must be sleeping!")
		}
};

var takeOrder = function(){
	for (n = 0; n < familyEating.length; n++){
		if(n === 0 ){
			meaghan.eggs = eggOrder[n];
			meaghan.bacon = baconOrder[n];
			meaghan.drink = drinkOrder[n];
		}else if(n === 1){
			omar.eggs = eggOrder[n];
			omar.bacon = baconOrder[n];
			omar.drink = drinkOrder[n];
		}else if(n === 2){
			andisheh.eggs = eggOrder[n];
			andisheh.bacon = baconOrder[n];
			andisheh.drink = drinkOrder[n];
		}
	}
}

var eggsordered = function(famMember1, famMember2, famMember3){
	var eggsNeeded,
		
	eggsNeeded = famMember1.eggs + famMember2.eggs + famMember3.eggs;
	say(famMember1.name + " would like " + famMember1.eggs + " eggs. " +
		famMember2.name + " would like " + famMember2.eggs + " eggs and " + 
		famMember3.name + " would like " + famMember3.eggs + " eggs.");

	return eggsNeeded;
}

var baconOrdered = function(famMember1, famMember2, famMember3){
	var baconNeeded;

	baconNeeded = famMember1.bacon + famMember2.bacon + famMember3.bacon;
	say(famMember1.name + " would like " + famMember1.bacon + " strips of bacon. " +
		famMember2.name + " would like " + famMember2.bacon + " strips and " + 
		famMember3.name + " would like " + famMember3.bacon + " strips of bacon.");

	return baconNeeded;
}

var ingredientsNeeded = function(numberEggs, numberBacon, eggsNeeded, baconNeeded){
	var ingredientsReady,
		enoughEgg,
		enoughBacon;

	if(eggsNeeded <= numberEggs){
		enoughEgg = true;
		}else {
		enoughEgg = false;
		};
	if(baconNeeded <= numberBacon){
		enoughBacon = true;
		}else{
		enoughBacon = false;
		};
	if(enoughEgg && enoughBacon){		
		ingredientsReady = "We have plenty of eggs and bacon to make breakfast.";
	}else {		
		ingredientsReady = "Looks like we don't have enough to make breakfast";
	};
	return ingredientsReady;
};

//Script

var meaghan  = familyMember(familyEating[0]); //return object, local var
var omar     = familyMember(familyEating[1]); //return object, local var
var andisheh = familyMember(familyEating[2]); //return object, local var

say("Good Morning! Is everyone awake and ready for breakfast?")//string arg

var famstatus = famReady(familyEating); //array arg, boolean return, conditional, local var
readyRollCall(famstatus); //boolean argument, conditional, for loop (nested?)
var seatsAvailable = seatNumChecker(6,3);

say("There are " + seatsAvailable + " seats available at the table if anyone else joins us.");
say("Let's take everyone's order"); //string arg

takeOrder(); //for loop, nested conditional?,
var eggsNeeded = eggsordered(meaghan,omar,andisheh); //object arg, math, local var
var baconNeeded = baconOrdered(meaghan,omar,andisheh);  //object arg, math, local var

say("We need " + eggsNeeded + " eggs and " + baconNeeded + " strips of bacon");

var ingredientsReady = ingredientsNeeded(12 ,20 ,eggsNeeded ,baconNeeded); //return boolean, num arg, 
say(ingredientsReady);

var cookSettings = oven.getCookSettings();

if(oven.working === true){
	say("We'll cook the bacon in the oven for " + json.foods["bacon"].cooktime + " " + json.foods["bacon"].cooktimeunits);
	//referense JSON data here
}else{
	say("We'll cook the bacon on the stove.")
};

say("Let's eat!");

//say(meaghan);
//say(omar);
//say(andisheh);
