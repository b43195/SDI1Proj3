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


//Script

var meaghan  = familyMember(familyEating[0]);
var omar     = familyMember(familyEating[1]);
var andisheh = familyMember(familyEating[2]);

takeOrder();

var familyReady = function(){
	for (n = 0; n < familyEating.length; n++){
	say(familyEating[n] + " is ready for breakfast");
	};
};

familyReady();
say(meaghan);
say(omar);
say(andisheh);



//JSON
// Use Eggs, Bacon, OJ and Coffee  with package info (cook time, nutrional info )

/*Project2Code
//Variable Declaration

var familyMembers = ["Meaghan" , "Omar" , "Andisheh"],
	familyLastName = "Bassiri",
	numberEggsWillEat = [2 , 1 , 3],
	numberBaconWillEat = [3 , 1 , 2],
	breakfastTime = 7,
	haveIngredients;

//Functions

var say = function(message){
 	console.log(message);
 };
//Procedure
var timeToCook = function(currentTime){
	if (currentTime < breakfastTime){
		say("I can't wait until " + breakfastTime + " I'm hungry!")
	}else {
		say("Let's get cooking!");
	};
};
//Boolean
var ingredientsNeeded = function(numberEggs, numberBacon){
	var eggsNeeded,
		baconNeeded,
		enoughEgg,
		enoughBacon,
		ingredientsReady;

	eggsNeeded = numberEggsWillEat[0] + numberEggsWillEat[1] + numberEggsWillEat [2];
	baconNeeded = numberBaconWillEat [0] + numberBaconWillEat[1] + numberBaconWillEat[2];

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
		say("We needed " + eggsNeeded + " eggs and have " + numberEggs + ". We also needed " + baconNeeded + " strips of bacon and have " + numberBacon + " , so we have everything we need!");
		ingredientsReady = true;
	}else {
		say("We needed " + eggsNeeded + " eggs and have " + numberEggs + ". We also needed " + baconNeeded + " strips of bacon and have " + numberBacon + " , so We'll need to make a trip to the store...");
		ingredientsReady = false;
	};
	return ingredientsReady;
};
//Number
var cookEggs = function(minutesPerEgg){
	var eggsToCook = numberEggsWillEat[0] + numberEggsWillEat[1] + numberEggsWillEat [2];
		totalCookTime = eggsToCook * minutesPerEgg;
	say("Let's start cooking");
	while(totalCookTime > 0){
		say(totalCookTime + " more minutes until the eggs are done.");
		totalCookTime--;
	}
	say("Eggs are done!");
	return eggsToCook;
};
//String
var familyComments = function(megComment,omarComment){
	var whatBreakfast = "These Eggs and Bacon ";
	say("Meaghan says,\"" + whatBreakfast + megComment + "\"");
	say("and Omar says,\"" + whatBreakfast + omarComment + "\"");
};
//Array
var stillHungry = function([megsMore, omarMore, andishehMore], numberMore){
	var moreEggs = 0;
	var familyMembersAddEggs = []
	if(megsMore === true){
		moreEggs+=numberMore;
		familyMembersAddEggs.push(numberMore);
		say(familyMembers[0] + " is still hungry.  I'll make her " + numberMore + " more eggs.");
	}
	if(omarMore === true){
		moreEggs+=numberMore;
		familyMembersAddEggs.push(numberMore);
		say(familyMembers[1] + " is still hungry.  I'll make him " + numberMore + " more eggs.");
	}
	if(andishehMore === true){
		moreEggs+=numberMore;
		familyMembersAddEggs.push(numberMore);
		say(familyMembers[2] + " is still hungry.  I'll him " + numberMore + " more eggs.");
	}

	for (moreEggs; moreEggs > 0; moreEggs--){
		say("We have " + moreEggs + " more eggs to cook");
	};
	return familyMembersAddEggs;
};

//Script

say("It's time to wake up and feed the " + familyLastName + " family.");
timeToCook(7);
var haveIngredients = ingredientsNeeded(12,30);
var eggsCooked = cookEggs(2);
say("Time to plate the " + eggsCooked + " eggs and bacon so we can eat!");
familyComments("taste awesome", "are num num nummy!")
var moreEggsCooked = stillHungry([true, false, true],2);
say("Mmm Thanks for Breakfast!");
*/

