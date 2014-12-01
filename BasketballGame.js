var num;
var homeTeamScore = 0;
var awayTeamScore = 0;
var passesCompleted = 0;
var team;
var startGame = true;
var count = 0;
var intialPossession; 
var threePointPercentage;
var twoPointPercentage;
var threePointPercentage1;
var twoPointPercentage1;
var homeTeamTwoPointPercentage;
var homeTeamThreePointPercentage;
var awayTeamTwoPointPercentage;
var awayTeamThreePointPercentage;
var homeTurnover;
var awayTurnover;
var homeThreePointShot;
var awayThreePointShot;
var homeRebound;
var awayRebound;
var teams = new Array();
var delay = 0;
var result;
var possession;
var currentPossession;
var missedShot2ptHome = 0;
var missedShot2ptAway = 0;
var missedShot3ptHome = 0;
var missedShot3ptAway = 0;
var madeHome2ptShot = 0;
var madeAway2ptShot = 0;
var madeHome3ptShot = 0;
var madeAway3ptShot = 0;
var homeOffRebound = 0;
var homeDefRebound = 0;
var awayOffRebound = 0;
var awayDefRebound = 0;
var homeTurnovers = 0;
var awayTurnovers = 0;

// creates a team and generates an overall
function Team(name, offOverall, defOverall, overall){
	this.name = name;
	var generateOverallNum = true;
	var generateOffNum = true;
	var generateDefNum = true;
	var combinedOverall;
	var randNum;
	var num;
	var finalNum;

	while(generateOffNum){

		randNum = Math.random();
		num = randNum * 100;
		finalNum = Math.round(num);

		if(finalNum > 76 && finalNum < 95){
			offOverall = finalNum;
			this.offOverall = offOverall;
			generateOffNum = false;
			generateDefNum = true;
		}
		else{
			generateOffNum= true;
		}
	}

	while(generateDefNum){

		randNum = Math.random();
		num = randNum * 100;
		finalNum = Math.round(num);

		if(finalNum > 76 && finalNum < 95){
			defOverall = finalNum;
			this.defOverall = defOverall;
			generateOffNum = false;
			generateDefNum = false;
		}
		else{
			generateDefNum= true;
		}
	}

	combinedOverall = defOverall + offOverall;
	var rawOverall = combinedOverall/2;
	overall = Math.round(rawOverall);
	this.overall = overall;
}

// Set the name of the teams playing
function TeamName(name1, name2){
	this.name1 = name1;
	this.name2 = name2;
}

// Gets the result and prints it. Points are added here. 
function getResult(result){

			this.result = result;
			var finalResult;

			switch(result){
				case "home 2pt field goal missed. Home offensive rebound":
					finalResult = name1 + " missed the shot. " + name1 + " rebound.";
					missedShot2ptHome++;
					homeOffRebound++;
					console.log(finalResult);
					break;
				case "home 2pt field goal missed. Away defensive rebound":
					finalResult = name1 + " missed the shot. " + name2 + " rebounded the ball.";
					missedShot2ptHome++;
					awayDefRebound++;
					console.log(finalResult);
					break;
				case "home 3pt field goal missed. Home offensive rebound":
					finalResult = name1 + " missed the shot. " + name2 + " rebounded the ball.";
					missedShot3ptHome++;
					homeOffRebound++;
					console.log(finalResult);
					break;
				case "home 3pt field goal missed. Away defensive rebound":
					finalResult = name1 + " missed the shot." + name2 + " rebounded the ball.";
					missedShot3ptHome++;
					awayDefRebound++;
					console.log(finalResult);
					break;
				case "home 2pt field goal":
					finalResult = name1 + " scored two points!";
					console.log(finalResult);
					madeHome2ptShot++;
					homeTeamScore = homeTeamScore + 2;
					break;
				case "home 3pt field goal":
					finalResult = name1 + " scored three points!";
					console.log(finalResult);
					madeHome3ptShot++;
					homeTeamScore = homeTeamScore + 3;
					break;
				case "home turnover":
					finalResult = name1 + " turnover.";
					console.log(finalResult);
					homeTurnovers++;
					break;
				case "away 2pt field goal missed. Home defensive rebound":
					finalResult = name2 + " missed the shot. " +  name1 + " rebounded the ball.";
					missedShot2ptAway++;
					homeDefRebound++;
					console.log(finalResult);
					break;
				case "away 2pt field goal missed. Away offensive rebound":
					finalResult = name2 + " rebound.";
					missedShot2ptAway++;
					awayOffRebound;
					console.log(finalResult);
					break;	
				case "away 3pt field goal missed. Home defensive rebound":
					finalResult = name2 + " missed the shot." + name1 + " rebounded the ball.";
					missedShot3ptAway++;
					homeDefRebound++;
					console.log(finalResult);
					homeTeam = true;
					break;
				case "away 3pt field goal missed. Away offensive rebound":
					finalResult = name2 + " rebound.";
					missedShot3ptAway++;
					awayOffRebound++;
					console.log(finalResult);
					break;	
				case "away 2pt field goal":
					finalResult = name2 + " scored two points!";
					madeAway2ptShot++;
					console.log(finalResult);
					awayTeamScore = awayTeamScore + 2;
					break;
				case "away 3pt field goal":
					finalResult = name2 + " scored three points!";
					madeAway3ptShot++;
					awayTeamScore = awayTeamScore + 3;
					console.log(finalResult)
					break;
				case "away turnover":
					finalResult = name2 + " turnover.";
					awayTurnovers++;
					console.log(finalResult)
					break;
				default:
					finalResult = "Nothing happened";
					console.log(finalResult);
			}	
}

function shootingPercentage(homeOffOverall, awayOffOverall){

	this.homeOffOverall = homeOffOverall;
	this.awayOffOverall = awayOffOverall;

	switch(homeOffOverall){
		case 76:
		threePointPercentage = .25;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .36;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 77:
		threePointPercentage = .26;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .37;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 78:
		threePointPercentage = .27;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .38;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 79:
		threePointPercentage = .29;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .39;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 80:
		threePointPercentage = .30;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .41;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 81:
		threePointPercentage = .31;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .42;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 82:
		threePointPercentage = .32;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .43;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 83:
		threePointPercentage = .33;
		homeTeamTwoPointPercentage  = threePointPercentage;
		twoPointPercentage = .44;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 84:
		threePointPercentage = .34;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .44;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 85:
		threePointPercentage = .35;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .45;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 86:
		threePointPercentage = .35;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .45;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 87:
		threePointPercentage = .35;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .46;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 88:
		threePointPercentage = .35;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .47;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 89:
		threePointPercentage = .36;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .48;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 90:
		threePointPercentage = .38;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .46;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 91:
		threePointPercentage = .36;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .49;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 92:
		threePointPercentage = .40;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .49;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 93:
		threePointPercentage = .40;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .52;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 94:
		threePointPercentage = .41;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .53;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
		case 95:
		threePointPercentage = .45;
		homeTeamThreePointPercentage = threePointPercentage;
		twoPointPercentage = .46;
		homeTeamTwoPointPercentage = twoPointPercentage;
		break;
	}

	switch(awayOffOverall){
		case 76:
		threePointPercentage1 = .25;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .36;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 77:
		threePointPercentage1 = .26;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .37;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 78:
		threePointPercentage1 = .27;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .38;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 79:
		threePointPercentage1 = .29;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .40;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 80:
		threePointPercentage1 = .30;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .41;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 81:
		threePointPercentage1 = .31;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .42;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 82:
		threePointPercentage1 = .32;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .43;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 83:
		threePointPercentage1 = .32;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .43;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 84:
		threePointPercentage1 = .33;
		awayTeamThreePointPercentage  = threePointPercentage1;
		twoPointPercentage1 = .44;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 85:
		threePointPercentage1 = .34;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .44;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 86:
		threePointPercentage1 = .35;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .45;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 87:
		threePointPercentage1 = .35;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .45;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 88:
		threePointPercentage1 = .35;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .46;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 89:
		threePointPercentage1 = .35;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .47;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 90:
		threePointPercentage1 = .36;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .48;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 91:
		threePointPercentage1 = .38;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .46;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 92:
		threePointPercentage1 = .36;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .49;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 93:
		threePointPercentage1 = .40;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .49;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 94:
		threePointPercentage1 = .40;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .52;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
		case 95:
		threePointPercentage1 = .41;
		awayTeamThreePointPercentage = threePointPercentage1;
		twoPointPercentage1 = .53;
		awayTeamTwoPointPercentage = twoPointPercentage1;
		break;
	}
}

function checkComeback(score1, score2){

	this.score1 = score1;
	this.score2 = score2;

	var scoreDiff1 = score1 - score2;
	var scoreDiff2 = score2 - score1;
	var boostCount = 0;

	if(scoreDiff1 > 5 && scoreDiff1 < 10){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .05;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .05;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage + .05;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage - .05;
		boostCount++;

		if(boostCount == 5){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .05;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .05;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage - .05;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage + .05;
			boostCount = 0;
		}
	}

	else if(scoreDiff1 > 10 && scoreDiff1 < 15){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .07;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .07;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage + .07;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage - .07;
		boostCount++;

		if(boostCount == 8){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .07;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .07;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage - .07;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage + .07;
			boostCount = 0;
		}
	}
		
	else if(scoreDiff1 > 15 && scoreDiff1 < 20){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .10;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .10;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage + .10;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage - .10;
		boostCount++;

		if(boostCount == 8){
			boostCount = 0;
			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .10;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .10;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage - .10;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage + .10;
			boostCount = 0;
		}
	}

	else if(scoreDiff1 > 20 && scoreDiff1 < 25){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .12;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .12;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage + .12;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage - .12;
		boostCount++;

		if(boostCount == 10){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .12;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .12;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage - .12;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage + .12;
			boostCount = 0;
		}
	}

	else if(scoreDiff1 > 25 && scoreDiff1 < 30){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .15;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .15;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage + .15;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage - .15;
		boostCount++;

		if(boostCount == 20){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .15;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .15;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage - .15;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage + .15;
			boostCount = 0;
		}
	}

	else if(scoreDiff2 > 5 && scoreDiff2 < 10){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .05;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .05;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage - .05;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage + .05;
		boostCount++;

		if(boostCount == 5){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .05;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .05;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage + .05;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage - .05;
			boostCount = 0;
		}
	}

	else if(scoreDiff2 > 10 && scoreDiff2 < 15){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .07;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .07;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage - .07;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage + .07;
		boostCount++;

		if(boostCount == 8){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .07;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .07;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage + .07;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage - .07;
			boostCount = 0;
		}
	}
		
	else if(scoreDiff2 > 15 && scoreDiff2 < 20){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .10;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .10;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage - .10;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage + .10;
		boostCount++;

		if(boostCount == 8){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage +.10;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .10;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage + .10;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage - .10;
			boostCount = 0;
		}
	}

	else if(scoreDiff2 > 20 && scoreDiff2 < 25){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .12;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .12;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage - .12;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage + .12;
		boostCount++;

		if(boostCount == 10){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .12;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .12;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage + .12;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage - .12;
			boostCount = 0;
		}
	}

	else if(scoreDiff2 > 25 && scoreDiff2 < 30){
		boostCount = 0;
		awayTeamTwoPointPercentage = awayTeamTwoPointPercentage - .15;
		homeTeamTwoPointPercentage = homeTeamTwoPointPercentage + .15;
		awayTeamThreePointPercentage = awayTeamThreePointPercentage - .15;
		homeTeamThreePointPercentage = homeTeamThreePointPercentage + .15;
		boostCount++;

		if(boostCount == 20){

			awayTeamTwoPointPercentage = awayTeamTwoPointPercentage + .15;
			homeTeamTwoPointPercentage = homeTeamTwoPointPercentage - .15;
			awayTeamThreePointPercentage = awayTeamThreePointPercentage + .15;
			homeTeamThreePointPercentage = homeTeamThreePointPercentage - .15;
			boostCount = 0;
		}
	}
}

function defense(homeOffOverall, homeDefOverall, awayOffOverall, awayDefOverall){

	this.homeOffOverall = homeOffOverall;
	this.homeDefOverall = homeDefOverall;
	this.awayOffOverall = awayOffOverall;
	this.awayDefOverall = awayDefOverall;

	var homeOffDifference = homeOffOverall - awayDefOverall;
	var awayOffDifference = awayOffOverall - homeDefOverall;
	var homeDefDifference = homeDefOverall - awayOffOverall;
	var awayDefDifference = awayDefOverall - homeOffOverall;

	if(homeOffOverall > awayDefOverall){

		switch(homeOffDifference){

			case 1:
				homeTurnover = .15 - .01;
				homeThreePointShot = .66;
				homeRebound = .50 + .01;
				break;
			case 2:
				 homeTurnover = .15 - .02;
				 homeThreePointShot = .65;
				 homeRebound = .50 + .02;
				 break;
			case 3: 
				homeTurnover = .15 - .03;
				homeThreePointShot = .64;
				homeRebound = .50 + .03;
				break;
			case 4: 
				homeTurnover = .15 - .04;
				homeThreePointShot = .63;
				homeRebound = .50 + .04;
				break;
			case 5:
				homeTurnover = .15 - .05;
				homeThreePointShot = .62;
				homeRebound = .50 + .05;
				break;
			case 6: 
				homeTurnover = .15 - .06;
				homeThreePointShot = .61;
				homeRebound = .50 + .06;
				break;
			case 7:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .07;
				break;
			case 8:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;	
				homeRebound = .50 + .08;
				break;
			case 9:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .09;
				break;	
			case 10:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .10;
				break;		
			case 11:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .11;	
				break;	
			case 12:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .12;
				break;
			case 13:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .13;
				break;
			case 14:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .14;
				break;
			case 15:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .15;
				break;
			case 16:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .15;
				break;
			case 17:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .15;
				break;
			case 18:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .15;
				break;
			case 19:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				homeRebound = .50 + .15;
				break;
			default:
				break;
		}		

	}

	if(homeDefOverall > awayOffOverall){

		switch(homeDefDifference){

			case 1:
				homeTurnover = .15 + .01;
				homeThreePointShot = .61;
				homeRebound = .50 - .01;
				break;
			case 2:
				 homeTurnover = .15 + .02;
				 homeThreePointShot = .62;
				 homeRebound = .50 - .02;
				 break;
			case 3: 
				homeTurnover = .15 + .03;
				homeThreePointShot = .63;
				homeRebound = .50 - .03;
				break;
			case 4: 
				homeTurnover = .15 + .04;
				homeThreePointShot = .64;
				homeRebound = .50 - .04;
				break;
			case 5:
				homeTurnover = .15 + .05;
				homeThreePointShot = .65;
				homeRebound = .50 - .05;
				break;
			case 6: 
				homeTurnover = .15 + .06;
				homeThreePointShot = .66;
				homeRebound = .50 - .06;
				break;
			case 7:
				homeTurnover = .15 + .07;
				homeThreePointShot = .67;
				homeRebound = .50 - .07;
				break;
			case 8:
				homeTurnover = .15 + .08;
				homeThreePointShot = .68;	
				homeRebound = .50 - .08;
				break;
			case 9:
				homeTurnover = .15 + .09;
				homeThreePointShot = .69;
				homeRebound = .50 - .09;
				break;	
			case 10:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .10;
				break;		
			case 11:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .11;	
				break;	
			case 12:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .12;
				break;
			case 13:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .13;
				break;
			case 14:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .14;
				break;
			case 15:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .15;
				break;
			case 16:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .15;
				break;
			case 17:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .15;
				break;
			case 18:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .15;
				break;
			case 19:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				homeRebound = .50 - .15;
				break;
			default:
				break;
		}		

	}

	if(awayOffOverall > homeDefOverall){

		switch(awayOffDifference){

			case 1:
				awayTurnover = .15 - .01;
				awayThreePointShot = .66;
				awayRebound = .50 + .01;
				break;
			case 2:
				 awayTurnover = .15 - .02;
				 awayThreePointShot = .65;
				 awayRebound = .50 + .02;
				 break;
			case 3: 
				awayTurnover = .15 - .03;
				awayThreePointShot = .64;
				awayRebound = .50 + .03;
				break;
			case 4: 
				awayTurnover = .15 - .04;
				awayThreePointShot = .63;
				awayRebound = .50 + .04;
				break;
			case 5:
				awayTurnover = .15 - .05;
				awayThreePointShot = .62;
				awayRebound = .50 + .05;
				break;
			case 6: 
				awayTurnover = .15 - .06;
				awayThreePointShot = .61;
				awayRebound = .50 + .06;
				break;
			case 7:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .07;
				break;
			case 8:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;	
				awayRebound = .50 + .08;
				break;
			case 9:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .09;
				break;	
			case 10:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .10;
				break;		
			case 11:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .11;	
				break;	
			case 12:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .12;
				break;
			case 13:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .13;
				break;
			case 14:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .14;
				break;
			case 15:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .15;
				break;
			case 16:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .15;
				break;
			case 17:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .15;
				break;
			case 18:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .15;
				break;
			case 19:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				awayRebound = .50 + .15;
				break;
			default:
				break;
		}		

	}

	if(awayDefOverall > homeOffOverall){

		switch(awayDefDifference){

			case 1:
				awayTurnover = .15 + .01;
				awayThreePointShot = .61;
				awayRebound = .50 - .01;
				break;
			case 2:
				 awayTurnover = .15 + .02;
				 awayThreePointShot = .62;
				 awayRebound = .50 - .02;
				 break;
			case 3: 
				awayTurnover = .15 + .03;
				awayThreePointShot = .63;
				awayRebound = .50 - .03;
				break;
			case 4: 
				awayTurnover = .15 + .04;
				awayThreePointShot = .64;
				awayRebound = .50 - .04;
				break;
			case 5:
				awayTurnover = .15 + .05;
				awayThreePointShot = .65;
				awayRebound = .50 - .05;
				break;
			case 6: 
				awayTurnover = .15 + .06;
				awayThreePointShot = .66;
				awayRebound = .50 - .06;
				break;
			case 7:
				awayTurnover = .15 + .07;
				awayThreePointShot = .67;
				awayRebound = .50 - .07;
				break;
			case 8:
				awayTurnover = .15 + .08;
				awayThreePointShot = .68;	
				awayRebound = .50 - .08;
				break;
			case 9:
				awayTurnover = .15 + .09;
				awayThreePointShot = .69;
				awayRebound = .50 - .09;
				break;	
			case 10:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .10;
				break;		
			case 11:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .11;	
				break;	
			case 12:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .12;
				break;
			case 13:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .13;
				break;
			case 14:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .14;
				break;
			case 15:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .15;
				break;
			case 16:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .15;
				break;
			case 17:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .15;
				break;
			case 18:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .15;
				break;
			case 19:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				awayRebound = .50 - .15;
				break;
			default:
				break;
		}		

	}

}


//Teams
teams[0] = new Team('Minnesota', 0, 0, 0);
teams[1] = new Team('Iowa', 0, 0, 0);
teams[2] = new Team('Michigan', 0, 0, 0);
teams[3] = new Team('Wisconsin', 0, 0, 0);

// Inital possession
team = teams[3].name;


// Game starts
function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;

	shootingPercentage(team1.offOverall, team2.offOverall);
	TeamName(team1.name, team2.name);
	defense(team1.offOverall, team1.defOverall, team2.offOverall, team2.defOverall);

	// Check to see who has possession
	function currentPossession(team){
		this.team = team;

		if(team == team2.name){

			currentPossession = team2.name;
		}

		if(team === team1.name){
			currentPossession = team1.name;
		}
	}

	// Generate a result from the possession
	function generateResult(possession){

		this.possession = possession;
		// Home Team's possession
		if(possession == team1.name){
			
			num = Math.random();
			if(num < homeTurnover){
				result = "home turnover";
				team = team2.name;
			}
			else if(num > homeTurnover && num < homeThreePointShot){
				console.log(team1.name + " shoots a 2 pointer...")
				num = Math.random();
				if(num <= homeTeamTwoPointPercentage){
					result = "home 2pt field goal";
					team = team2.name;
				}
				else{
					num = Math.random();
					if(num < homeRebound){
						result = "home 2pt field goal missed. Home offensive rebound";
						team = team1.name;
					}
					else{
						result = "home 2pt field goal missed. Away defensive rebound";
						team = team2.name;
					}
				}
			}
				
			else if(num > homeThreePointShot){
				num = Math.random();
				console.log(team1.name + " shoots a 3 pointer...")
				if(num <= homeTeamThreePointPercentage){
					result = "home 3pt field goal";
					team = team2.name;
				}
				else{
					num = Math.random();
					if(num < homeRebound){
						result = "home 3pt field goal missed. Home offensive rebound";
						team = team1.name;
					}
					else {
						result = "home 3pt field goal missed. Away defensive rebound";
						team = team2.name;
					}
				}
			}
		}
		
		// Away Team's possession
		if(possession == team2.name){
			// Away Team
			num = Math.random();
			if(num < awayTurnover){
				result = "away turnover";
				team = team1.name;
			}
			
			else if(num > awayTurnover && num < awayThreePointShot){
				console.log(team2.name + " shoots a 2 pointer...")
				num = Math.random();
				if(num <= awayTeamTwoPointPercentage){
					result = "away 2pt field goal";
					team = team1.name;
				}
				else{
					num = Math.random();
					if(num < awayRebound){
						result = "away 2pt field goal missed. Away offensive rebound";
						team = team2.name;
					}
					else{
						result = "away 2pt field goal missed. Home defensive rebound";
						team = team1.name;
					}
				}
			}
				
			else if(num > awayThreePointShot){
				num = Math.random();
				console.log(team2.name + " shoots a 3 pointer...")
				if(num <= awayTeamThreePointPercentage){
					result = "away 3pt field goal";
					team = team1.name;
				}
				else{
					num = Math.random();
					if(num < awayRebound){
						result = "away 3pt field goal missed. Away offensive rebound";
						team = team2.name;
					
					}
					else{
						result = "away 3pt field goal missed. Home defensive rebound";
						team = team1.name;
						
					}
				}
			}
		}

	}

	//function calls
	checkComeback(homeTeamScore, awayTeamScore);
	currentPossession(team);
	generateResult(currentPossession);
	getResult(result);	
	console.log(name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore)
	count++;
	// End Game
	if(count == 125){
		var homeTotal2PointShots = missedShot2ptHome + madeHome2ptShot;
		var homeTotal3PointShots = missedShot3ptHome + madeHome3ptShot;
		var awayTotal2PointShots = missedShot2ptAway + madeAway2ptShot;
		var awayTotal3PointShots = missedShot3ptAway + madeAway3ptShot;
		var home2PointPercentage = madeHome2ptShot/homeTotal2PointShots * 100;
		var home3PointPercentage = madeHome3ptShot/homeTotal3PointShots * 100;
		var away2PointPercentage = madeAway2ptShot/awayTotal2PointShots * 100;
		var away3PointPercentage = madeAway3ptShot/awayTotal3PointShots * 100;
		var homeTotalRebounds = homeOffRebound + homeDefRebound;
		var awayTotalRebounds = awayOffRebound + awayDefRebound;

		clearInterval(delay);
		console.log("The final score is... \n" + name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore)
		console.log("Home-Stats:\n" + "2pt field goals: " + madeHome2ptShot + "/" + homeTotal2PointShots + " - " + Math.round(home2PointPercentage) + "%")
		console.log("3pt field goals: " + madeHome3ptShot + "/" + homeTotal3PointShots + " - " + Math.round(home3PointPercentage) + "%")
		console.log("Total Rebounds: " + homeTotalRebounds)
		console.log("Offensive Rebounds: " + homeOffRebound + "\n" + "Defensive Rebounds: " + homeDefRebound)
		console.log("Turnovers: " + homeTurnovers)
		console.log("Away-Stats:\n" + "2pt field goals: " + madeAway2ptShot + "/" + awayTotal2PointShots + " - " + Math.round(away2PointPercentage) + "%")
		console.log("3pt field goals: " + madeAway3ptShot + "/" + awayTotal3PointShots + " - " + Math.round(away3PointPercentage) + "%")
		console.log("Total Rebounds: " + awayTotalRebounds)
		console.log("Offensive Rebounds: " + awayOffRebound + "\n" + "Defensive Rebounds: " + awayDefRebound)
		console.log("Turnovers: " + awayTurnovers)
	}
}

delay = setInterval(function(){gameStart(teams[3], teams[1])}, 5000);
console.log(teams[3].overall + ", " + teams[1].overall)