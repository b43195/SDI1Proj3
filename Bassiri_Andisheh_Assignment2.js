//Andisheh Bassiri
//Jan 16th 2013
//Project 2
//Story - Making breakfast for my family.

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

