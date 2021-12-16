
class Ship {
	constructor (spaceId, hull, firepower, accuracy) {
    	this.spaceId = spaceId;
    	this.hull = hull;
        this.remainingHull = hull;
        this.firepower = firepower;
        this.remainingFirepower = firepower;
        this.accuracy = accuracy;
		this.hits = 0;
		this.continue = '';
    }
	
	//Getter
	get hullNow() {
		return this.remainingHull;
	}
	
	tryToFire() {
		let myOdds = this.accuracy;
		let didIhit = Math.random();	
		
		// if the random number is less than my accuracy, then it's a hit, else it is not
		if (didIhit < myOdds) {
			return this.firepower;
		} else {
			return 0;
		}
	}

	assessDamage (hit) {
		this.remainingHull -= hit;
	}
}


// function delay(time) {
//  return new Promise(resolve => setTimeout(resolve, time));
//}


// function doWeContinue(myShip, numEnemyRemaining) {
//   var txt;
//   var keepGoing;
//   if (confirm("You won that battle.  You have " + myShip.hullNow + " hull.  There are " + numEnemyRemaining + " ships remaining.  Press okay to battle next ship. Press Cancel to retreat.")) {
//     txt = "You pressed OK! We will Continue";
// 	keepGoing = true;
//   } else {
//     txt = "You pressed Cancel! We will retreat - FOR NOW";
// 	keepGoing = false;
//   }
// 	return keepGoing;
// }



// below here should all be a function - but start with a function that represents a game turn
function playGame() {
	var retreat = '';
    console.log('The game has started')
    // defining my ship
	// my ship has the following traits: hull = 20, firepower = 5, accuracy = .7
	const myShip = new Ship('USS Hello World!', 20, 5, .7);
	// According to mdn this should output the name - myShip but it is not
	// console.log(myShip.name);
	console.log(myShip);
    

	// displaying my ship
	update("demo2", myShip.spaceId);
	update("demo1", 'my ship has an initial hull of ' + myShip.hull + ' and remaining of: ' + myShip.remainingHull);
	// document.getElementById("demo2").innerHTML =  myShip.spaceId ;
	// document.getElementById("demo1").innerHTML = 'my ship has an initial hull of ' + myShip.hull + ' and remaining of: ' + myShip.remainingHull;
	//	document.getElementById("demo3").innerHTML =  'starting a new game 1' ;
	update("demo3", "starting a new game 1")
	document.getElementById("demo5").innerHTML =  'starting a new game 2' ;
	update("demo4", "starting a new game 3")
	update("final-outcome", "---------------");

	

	// defining the alien ships
	// The alien ships should each have the following ranged properties determined randomly:
	// hull - between 3 and 6
	// firepower - between 2 and 4
	// accuracy - between .6 and .8
	// You could be battling six alien ships each with unique values.
	// i need 6 new alien ships, and i'll put them in an array for easier access and tracking

	// for 1 to 6 (or really 0 to 5) i'm going to define the alien ship values, create an object, and push that onto the array
	const alienShipArr = [];
	for (let i = 0; i < 6; i++) {
		let newAlienShipName = 'Scary Alien Ship ' + (i+1);
    	//console.log('hi');
	    //console.log(newAlienShipName);
    
    	// the description says between 3 and 6, which i am interpreting as 3, 4, 5, 6
    	let newAlienShipHull = 3 + Math.floor(Math.random() * 4);
    	// similarly, the description says between 2 and 4
    	let newAlienShipFirepower = 2 +  Math.floor(Math.random() * 3);
    	// to get 0-1 to be between .6 and .8, i'm going to divide by 5 to get it from 0-.2 and then add .6
    	let newAlienShipAccuracy = .6 + (Math.random() / 5);
    
    
		//console.log(newAlienShipName, newAlienShipHull, newAlienShipFirepower, newAlienShipAccuracy);
    
    	const newAlienShip = new Ship(newAlienShipName, newAlienShipHull, newAlienShipFirepower, newAlienShipAccuracy);
       	//console.log(newAlienShip);
		
    	alienShipArr.push(newAlienShip);
	}

	// console.log(alienShipArr)

	let displayString = '';
	// for (let i = 0; i < 6; i ++) {
	//	displayString += alienShipArr[i].spaceId + ' has an initial hull of ' + alienShipArr[i].hull + ', an initial firepower of ' + alienShipArr[i].firepower + ', and an accuracy of ' + alienShipArr[i].accuracy + '----------\n' ; 
	// }
	for (let i = 0; i < 6; i ++) {
		displayString += alienShipArr[i].spaceId + '   ' + '----------\n' ; 
	}
	// console.log(alienShipArr[0].spaceId)
	console.log(displayString);

	// displaying my ship
	// document.getElementById("demo3").innerHTML =  displayString ;
	update("demo3", displayString);


	// Now that my ship and the alien ships are constructed, attack a ship
	// until it is defeated (its reamining hull is 0) or i am defeated (my remaining hull is 0)

    //function runGame
 	let winner = runGame(myShip, alienShipArr);
	let endGame = 'no';
	console.log('the winner is: ', winner);


//while winner is me and don't end game
	if (winner === 'me') {
		// updateString1 = 'You win!  Your remaining hull is: ' + myShip.hullNow;
		// console.log(updateString1);
		// update("demo4", updateString1);
		// alienShipArr.pop();
		// updateString2 = 'They lost!  There are ' + alienShipArr.length + ' aliens left';
		// console.log(updateString2);
		// update("demo5", updateString2);
// 		let endGame = updatePrompt('demo5', 'your remaining hull ' + myShip.hullNow, myShip, alienShipArr)
console.log("trying to continue");
console.log(myShip.continue);
console.log('calling function doWeContinue');
let testVar;
if (testVar = doWeContinue(myShip) === 'yes') {
	console.log('we should be continuing ');
};
if (testVar === 'yes') {
	console.log('keep endGame at no, because we continue');
	console.log ('endGame is : ', endGame)
}
else {
	endGame = 'yes'
	console.log ('endGame is : ', endGame)
}
// 		if (endGame === 'no') {
// 			console.log("WINNER of one battle");
// 			console.log(myShip);
// 			console.log(alienShipArr);
	
// 		}
		// winner = runGame(myShip, alienShipArr);
		// console.log('winner after second turn is: '+ winner);
		// if (winner === 'me') {
		// 	update("final-outcome", "LOST THE GAME");
		// }
	} else if (winner === 'aliens') {
		// updateString1 = 'They won :-(  The game is over :-(';
		// console.log(updateString1);
		// update("demo4", updateString1);
		// updateString2 = 'They won...  There are ' + alienShipArr.length + ' aliens left';
		// console.log(updateString2);
		// update("demo5", updateString2);

		console.log("LOST THE GAME");
		update("final-outcome", "LOST THE GAME");
		endGame = 'yes';
	} else {
		updateString = 'Something weird happened';
		update("demo4", updateString);
		update("demo5", updateString);
		endGame = 'yes';
	}

    	// if i am defeated, i lose, if it is defeated and there are more, check what to do next
	// probably display remaining ships and stats
	// 
		// if (!iAmDefeated && numEnemyRemaining) {
        //     //			keepGoing = doWeContinue(myShip, numEnemyRemaining);
        //                 console.log(keepGoing);
        //             }
        //             console.log('number of enemies left is: '+ numEnemyRemaining);
        //             console.log('index is: ' + index);
        //             console.log('i am defeated is: ' + iAmDefeated);


}

function attackShip(myShip, shipAttacking) {

	while (myShip.remainingHull > 0 && shipAttacking.remainingHull > 0) {
		let damage = myShip.tryToFire();
		console.log("damage is: " + damage);
		let iwon = true;


		// if damage is not 0 - so greater than 0
		if (damage) {
			console.log("I got a hit")
			console.log('their hull was at ' + shipAttacking.remainingHull);
			shipAttacking.assessDamage(damage);
			console.log('their hull is now at ' + shipAttacking.remainingHull);
			if (shipAttacking.remainingHull <= 0) {
				console.log('they are defeated!!');
//				let theirString = 'I Hit! AND they are defeated: ' + shipAttacking.remainingHull;
//				document.getElementById("demo5").innerHTML =  theirString ;
				return iwon;
				// numEnemyRemaining--;
			}
			else {
				console.log('it is now their turn');
//				let theirString = 'I Hit! BUT their hull is still at: ' + shipAttacking.remainingHull;
//				document.getElementById("demo5").innerHTML =  theirString ;
				// STILL NEED TO CONTINUE
			}
		} else {
			// console.log ('I missed! and now it"s their turn')
//			let theirString = 'I missed! Their hull is still at: ' + shipAttacking.remainingHull;
//			console.log(theirString);
//			document.getElementById("demo5").innerHTML =  theirString ;
		}
	
		//They return the attack
		// what are their attack odds and attack score

		// they can only attack if they were not defeated
		// the first if should be extraneous because function should exit when their hull is less than or equal to 0
		if (shipAttacking.remainingHull > 0) {
			let damage = shipAttacking.tryToFire();
			console.log("damage is: " + damage);
			if (damage) {
				console.log("THEY got a hit")
				console.log('my hull was at ' + myShip.remainingHull);
				myShip.assessDamage(damage);
				console.log('my hull is now at ' + myShip.remainingHull);
				myShip.hits++;
				if (myShip.remainingHull <= 0) {
					console.log('I am defeated!! :-(');
//					let myString = 'They Hit :-( AND I am defeated: ' + myShip.remainingHull;
//					document.getElementById("demo4").innerHTML =  myString ;
    	        	iAmDefeated = true;
					iwon = false;
					return iwon;
				}
				else {
					console.log('This round is over');
//					let myString = 'They Hit :-( but I am not defeated: ' + myShip.remainingHull;
//					document.getElementById("demo4").innerHTML =  myString ;
				}
			} else {
				console.log ('They missed! and now this round is over')
//				let myString = 'They Missed!  and this round is over: ' + myShip.remainingHull;
//				document.getElementById("demo4").innerHTML =  myString ;
			}
		} else {
			//should never get in here
			// they can't attack because that ship was defeated
			let myString = 'They were defeated and not attacking and my hull is at: ' + myShip.remainingHull;
			document.getElementById("demo4").innerHTML =  myString;
		}
	}

}


function runGame(myShip, alienShipArr) {
    let winner = '';

	//start with one attack
	// what is my hull and what is theirs?
	let theirHull = alienShipArr[0].hullNow;
	console.log('my hull is : ' + myShip.hullNow + ' and theirs is : ' + theirHull);
	// what are my attack odds and attack score

	// add a method tryToFire()
	// and assessDamage
	//start with one battle, against one ship
	//while both ships are not defeated (both hulls > 0), battle

	let iAmDefeated = false;
//	let numEnemyRemaining = 6;
	let index = 0;
	var keepGoing = true;

//	while (!iAmDefeated && keepGoing && numEnemyRemaining > 0) {
		let iwon = attackShip(myShip, alienShipArr[index]);
		//return something that shows who won, if I won, I can continue if I choose, but also decriment the number of enemies
		if (iwon) {
			updateString1 = 'You win!  You have been hit ' + myShip.hits + ' times.  Your remaining hull is: ' + myShip.hullNow;
			console.log(updateString1);
			update("demo4", updateString1);
			alienShipArr.pop();
			updateString2 = 'They lost!  There are ' + alienShipArr.length + ' aliens left';
			console.log(updateString2);
			update("demo5", updateString2);
			// residual from when this was being done as a for or while loop	
//			numEnemyRemaining--;
//			index++;
			console.log('i won');
			let retreat = updatePrompt("final-outcome", "do we continue", myShip, alienShipArr)
			return 'me';
		} else {
		//if i lost, the game is done
			iAmDefeated = true;
			updateString1 = 'They won :-(  The game is over :-(';
			console.log(updateString1);
			update("demo4", updateString1);
			updateString2 = 'They won...  There are ' + alienShipArr.length + ' aliens left';
			console.log(updateString2);
			update("demo5", updateString2);
			return 'aliens';
		}

		// if (retreat === 'no') {
		// 	let winner = runGame(myShip, alienShipArr);
		// }

}

// (created an h1 with the #1 in index.html to reflect the change as 2)

function update(updateLabel, updateText) {
	setTimeout( () => {
		document.getElementById(updateLabel).innerHTML =  updateText;
  	}, 500);
}


function updatePrompt(updateLabel, updateText, myShip, alienShipArr) {
	console.log('updateLabel is: ', updateLabel);
	console.log('updateText is: ', updateText);
	if (updateLabel && updateText) {
		document.getElementById(updateLabel).innerHTML =  updateText;
	}
    setTimeout( () => {
        const userInput = prompt("You destroyed this enemy! You have " +myShip.remainingHull + "hull left.  And There are " + alienShipArr.length + " aliens left.  Retreat? yes/no")
        if (userInput === 'yes') {
            console.log("We will retreat and live to see another day.");
			update("final-outcome", "RETREAT")
//            location.reload();
			return 'yes';
        }
		else if (userInput === 'no') {
			console.log("The game continues...");
			myShip.continue = 'yes';
			return 'no';
		} else {
			console.log("something weird happened, game over.");
			update("final-outcome", "something weird happened, try again");
			return 'yes';
		}
    }, 500); 

}

function doWeContinue (myShip) {
	setTimeout( () => {
		console.log('the only think that this does is check the value of the ship continue');
		console.log(myShip.continue);
		console.log('nothing happens after this because it all happened already');
	}, 1000);
}


// ++++++++ THIS DOESN'T WORK
// function updatePrompt(updateLabel, updateText, myShip, alienShipArr) {
// 	console.log('updateLabel is: ', updateLabel);
// 	console.log('updateText is: ', updateText);
// 	if (updateLabel && updateText) {
// 		document.getElementById(updateLabel).innerHTML =  updateText;
// 	}
// 	var userInput = prompt("You destroyed this enemy! Retreat?");
// 	if (userInput != null) {
//     	if (userInput === 'yes') {
//      		console.log("We will retreat and live to see another day.");
//      		//location.reload();
// 			 //return userInput;
// 	     }
// 		else if (userInput === 'no') {
// 			console.log("Let's attack again!");
// 			// runGame(myShip, alienShipArr);
// 			//location.reload();
// 			//return userInput;
// 		}
// 		else {
// 			console.log("Something weird happened");
// 			//location.reload();
// 			//return userInput;
// 		}
// 		setTimeout(updatePrompt, 0);
//     }
// }
// From class
// function update() {
//     document.getElementsByTagName('h1')[0].innerText = 2;
//     setTimeout( () => {
//         const userInput = prompt("You destroyed this enemy! Retreat?")
//         if (userInput === 'yes') {
//             console.log("We will retreat and live to see another day.");
//             location.reload();
//         }
//     }, 2000); 
//This was the example code
// function myFunction() {
// 	var prom = window.prompt("Enter a text (cancel to exit)");
// 	if (prom != null) {
// 		document.getElementById("txt1").innerHTML = "The text is: " + prom;
// 		setTimeout(myFunction, 0);
// 	}
//   }
//   myFunction();