var userGuess= [];
var letters= new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");


var wins= 0;
var losses= 0;
var guessesLeft= 10;



//this says when a key is released have an event happen
document.onkeyup = function (event){
	

// thus us taking the key that was released and putting it into a variable to use later and making sure it converts the letter selected into lowercase	

	var userInput= String.fromCharCode(event.keyCode) .toLowerCase();
	//this will move the user guesses into an array
	// userGuess.push(userInput);
	//this creates a pop-up saying you choose and then whatever letter the user chooses
alert("you choose " + userInput);


//this is having the computer choose a random letter from an Array that was created. It takes the random letter selected and puts it into a variable to use.
var answer= (letters[(Math.floor(Math.random() * letters.length))]);
//this creates a pop-up that says computer chooses and then the letter that was randonly selected
	alert("computer chooses " + answer);

//this says if the user guess is correct in guessing the computer random guess then alert the user has won
	if(userInput==answer) 
{
	//this also adds a number to the wins variable created in the beginning by using ++
	wins++;
	alert("you win!");
	
	//if the answers do not match then the loss variable is added to by ++ and the losses variable is subtracted by the --. an alert will pop-up stating a loss has occured
}
else
{
	
	losses++;
	guessesLeft--;
	alert("You lost!");
	
}

if(guessesLeft < 0){
	var alertReload=alert("you have lost, thanks for playing the Psychic Game!");
		location.reload();
	}

	

//this creates a variable to place on the html page. it is mixed with variables so the answers can be continuously updated as the game goes on
var html="<br/><p>wins: </p><p>" + wins + "</p>" + "<p> losses: </p><p>" + losses + "</p>" + "<p>Guesses left: <p>"
 + guessesLeft + "</p>" + "<p> Letters Guessed: </p>" + "</p>" + userGuess + "</p><br/>";

//this links the javascript to the html page by an id. innerHTML is tells it to move it to the page and display the html variable that was created above

document.querySelector('#game').innerHTML = html;
}
