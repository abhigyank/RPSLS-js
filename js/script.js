	var text = document.getElementsByTagName("P");
text = text[0];
var userLives = 0;
var botLives = 0;

function game(choice){
	var result;
	var computerChoice = Math.random();
	var userChoice = choice.id;
	computerChoice = Math.floor((computerChoice * 5) + 1);
	if(computerChoice == 1){computerChoice = "Rock";}
	else if(computerChoice == 2){computerChoice = "Paper";}
	else if(computerChoice == 3){computerChoice = "Scissor";}
	else if(computerChoice == 4){computerChoice = "Lizard";}
	else{computerChoice = "Spock";} 
 	var userWins = 'Bot: ' + computerChoice + '<span> YOU WIN !!</span>';
 	var botWins =  'Bot: ' + computerChoice + '<span> YOU LOSE !!</span>';
 	var draw = 'Bot: ' + computerChoice + '<span> DRAW</span>';
 	if(computerChoice == "Rock"){
 		if(userChoice == "paper" || userChoice == "spock"){
 			result = userWins;
 		}
 		else if(userChoice == "rock"){
 			result = draw;
 		}
 		else{
 			result = botWins;
 		}
 	}
 	else if(computerChoice == "Paper"){
 		if(userChoice == "scissor" || userChoice == "lizard"){
 			result = userWins;
 		}
 		else if(userChoice == "paper"){
 			result = draw;
 		}
 		else{
 			result = botWins;
 		}
 	}
 	else if(computerChoice == "Scissor"){
 		if(userChoice == "spock" || userChoice == "rock"){
 			result = userWins;
 		}
 		else if(userChoice == "scissor"){
 			result = draw;
 		}
 		else{
 			result = botWins;
 		}
 	}	
 	else if(computerChoice == "Lizard"){
 		if(userChoice == "rock" || userChoice == "scissor"){
 			result = userWins;
 		}
 		else if(userChoice == "lizard"){
 			result = draw;
 		}
 		else{
 			result = botWins;
 		}	
 	}
 	else if(computerChoice == "Spock"){
 		if(userChoice == "lizard" || userChoice == "paper"){
 			result = userWins;
 		}
 		else if(userChoice == "spock"){
 			result = draw;
 		}
 		else{
 			result = botWins;
 		}
 	}


 	if(result==userWins){
 		text.style.color="green";
 		choice.style.background="green";
 		text.innerHTML=result;
 		setTimeout(function(){choice.style.background ="none";},1000);

 	}
 	else if(result==botWins){
 		text.style.color="red";
 		choice.style.background="red";
 		text.innerHTML=result;
 		setTimeout(function(){choice.style.background ="none";},1000);
 	}
 	else if(result==draw){
 	text.style.color="white";
	choice.style.background="white";
	text.innerHTML=result;
	setTimeout(function(){choice.style.background ="none";},1000);	
 	}
 	score(result,userWins,botWins);

};

function score(result,userWins,botWins){
	var life = document.getElementsByClassName("icon-heart");
	if(result==userWins){
		life[(botLives++)+3].style.color="black";
	}
	else if(result==botWins){
		life[(userLives++)].style.color="black";	
	}
	if(botLives==3 || userLives==3){
		if(userLives==3){
		text.innerHTML+="<span>Better Luck Next Time! Bot Wins!</span>";
		}
		else{
		text.innerHTML+="<span>Some good luck you got there!</span>";
		}
		for (var i = life.length - 1; i >= 0; i--) {
			life[i].style.color="rgb(255,0,0)";
			botLives=0
			userLives=0
		}
	}
};