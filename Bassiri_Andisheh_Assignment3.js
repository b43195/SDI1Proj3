//Andisheh Bassiri
//SDI 1
//Jan2013
//Project3
//Project 2 expanded  


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
		drink: 0,
	}
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
		for (n = 0; n < familyEating.length; n++){
		say(familyEating[n] + " is ready for breakfast");
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
		say("We have " + numberEggs + " eggs and have " + numberBacon + " strips of bacon, so we have everything we need!");
		ingredientsReady = true;
	}else {
		say("We have " + numberEggs + " eggs and have " + numberBacon + " strips of bacon, so We'll need to make a trip to the store...");
		ingredientsReady = false;
	};
	return ingredientsReady;
};


//Script

var meaghan  = familyMember(familyEating[0]);
var omar     = familyMember(familyEating[1]);
var andisheh = familyMember(familyEating[2]);


say("Good Morning! It's time to make breakfast.  Is everyone awake and ready for breakfast?")
var famstatus = famReady(familyEating)
readyRollCall(famstatus);
say("Let's take everyones order");
takeOrder();
var eggsNeeded = eggsordered(meaghan,omar,andisheh);
var baconNeeded = baconOrdered(meaghan,omar,andisheh);
say("We need " + eggsNeeded + " eggs and " + baconNeeded + " strips of bacon");
var ingredientsReady = ingredientsNeeded(2,1,eggsNeeded,baconNeeded)


say(meaghan);
say(omar);
say(andisheh);



//JSON
// Use Eggs, Bacon, OJ and Coffee  with package info (cook time, nutrional info )
