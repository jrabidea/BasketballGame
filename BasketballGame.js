// Global Variables
var num;
var homeTeamScore = 0;
var awayTeamScore = 0;
var team;
var count = 0;
var intialPossession; 
var homeTeamThreePointRating;
var homeTeamTwoPointRating;
var awayTeamThreePointRating;
var awayTeamTwoPointRating;
var homeFTRating;
var awayFTRating;
var homeReboundRating;
var awayReboundRating;
var homeTeamTwoPointPercentage;
var homeTeamThreePointPercentage;
var awayTeamTwoPointPercentage;
var awayTeamThreePointPercentage;
var homeTeamFTPercentage;
var awayTeamFTPercentage;
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
function Team(name){
	this.name = name;
	var combinedOverall;
	var combinedOffOverall;
	var finalNum;
	var num;
	var rawNum;
	var rawOverall
	var findTwoPointRating = true;
	var findThreePointRating = false;
	var	findFTRating = false;
	var findOffReboundRating = false;
	var findDefReboundRating = false;
	var findStealsRating = false;
	var findBlocksRating = false;

	while(findTwoPointRating){
		num = Math.random() * 100;
		rawNum = Math.round(num);
		finalNum = rawNum;
		if(finalNum > 75 && finalNum < 96){
			twoPTRating = finalNum;
			this.twoPTRating = twoPTRating;
			findTwoPointRating = false;
			findThreePointRating = true;
		}
		else{
			findTwoPointRating = true;
		}
	}
	while(findThreePointRating){
		num = Math.random() * 100;
		finalNum = Math.round(num);
		if(finalNum > 75 && finalNum < 96){
			threePTRating = finalNum;
			this.threePTRating = threePTRating;
			findThreePointRating = false;
			findFTRating = true;
		}
		else{
			findThreePointRating = true;
		}
	}
	while(findFTRating){
		num = Math.random() * 100;
		rawNum = Math.round(num);
		finalNum = rawNum;
		if(finalNum > 75 && finalNum < 96){
			ftRating = finalNum;
			this.ftRating = ftRating;
			findFTRating = false;
			findOffReboundRating = true;
		}
		else{
			findFTRating = true;
		}
	}
	while(findOffReboundRating){
		num = Math.random() * 100;
		rawNum = Math.round(num);
		finalNum = rawNum;
		if(finalNum > 75 && finalNum < 96){
			offReboundRating = finalNum;
			this.offReboundRating = offReboundRating;
			findOffReboundRating = false;
			findDefReboundRating = true;
		}
		else{
			findOffReboundRating = true;
		}
	}
	while(findDefReboundRating){
		num = Math.random() * 100;
		rawNum = Math.round(num);
		finalNum = rawNum;
		if(finalNum > 75 && finalNum < 96){
			defReboundRating = finalNum;
			this.defReboundRating = defReboundRating;
			findDefReboundRating = false;
			findBlocksRating = true;
		}
		else{
			findDefReboundRating = true;
		}
	}
	while(findBlocksRating){
		num = Math.random() * 100;
		rawNum = Math.round(num);
		finalNum = rawNum;
		if(finalNum > 75 && finalNum < 96){
			blocksRating = finalNum;
			this.blocksRating = blocksRating;
			findBlocksRating = false;
			findStealsRating = true;
		}
		else{
			findBlocksRating = true;
		}
	}
	while(findStealsRating){
		num = Math.random() * 100;
		rawNum = Math.round(num);
		finalNum = rawNum;
		if(finalNum > 75 && finalNum < 96){
			stealsRating = finalNum;
			this.stealsRating = stealsRating;
			findStealsRating = false;
		}

		else{
			findStealsRating = true;
		}
	}	


	combinedOffOverall = twoPTRating + threePTRating + ftRating + offReboundRating;
	combinedDefOverall = defReboundRating + blocksRating + stealsRating; 
	var rawOffOverall = combinedOffOverall/4;
	var rawDefOverall = combinedDefOverall/3;
	offOverall = Math.round(rawOffOverall);
	defOverall = Math.round(rawDefOverall);
	this.offOverall = offOverall;
	this.defOverall = defOverall;
	combinedOverall = offOverall + defOverall;
	rawOverall = combinedOverall/2;
	overall = Math.round(rawOverall);
}


/*
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
					finalResult = name1 + " missed the shot. " + name1 + " rebounded the ball.";
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
					finalResult = name2 + " rebounded the ball.";
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
					finalResult = name2 + " rebounded the ball.";
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

// Sets the base percentage for each possession. 
function defense(homeOffOverall, homeDefOverall, awayOffOverall, awayDefOverall, homeReboundRating, awayReboundRating){

	this.homeOffOverall = homeOffOverall;
	this.homeDefOverall = homeDefOverall;
	this.awayOffOverall = awayOffOverall;
	this.awayDefOverall = awayDefOverall;
	this.homeReboundRating = homeReboundRating;
	this.awayReboundRating = awayReboundRating;

	var homeOffDifference = homeOffOverall - awayDefOverall;
	var awayOffDifference = awayOffOverall - homeDefOverall;
	var homeDefDifference = homeDefOverall - awayOffOverall;
	var awayDefDifference = awayDefOverall - homeOffOverall;
	var homeReboundDifference = homeReboundRating - awayReboundRating;
	var awayReboundDifference = awayReboundRating- homeReboundRating;

	if(homeOffOverall > awayDefOverall){

		switch(homeOffDifference){

			case 1:
				homeTurnover = .15 - .01;
				homeThreePointShot = .66;
				break;
			case 2:
				 homeTurnover = .15 - .02;
				 homeThreePointShot = .65;
				 break;
			case 3: 
				homeTurnover = .15 - .03;
				homeThreePointShot = .64;
				break;
			case 4: 
				homeTurnover = .15 - .04;
				homeThreePointShot = .63;
				break;
			case 5:
				homeTurnover = .15 - .05;
				homeThreePointShot = .62;
				break;
			case 6: 
				homeTurnover = .15 - .06;
				homeThreePointShot = .61;
				break;
			case 7:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 8:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;	
				break;
			case 9:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;	
			case 10:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;		
			case 11:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;	
			case 12:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 13:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 14:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 15:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 16:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 17:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 18:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				break;
			case 19:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
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
				break;
			case 2:
				 homeTurnover = .15 + .02;
				 homeThreePointShot = .62;
				 break;
			case 3: 
				homeTurnover = .15 + .03;
				homeThreePointShot = .63;
				break;
			case 4: 
				homeTurnover = .15 + .04;
				homeThreePointShot = .64;
				break;
			case 5:
				homeTurnover = .15 + .05;
				homeThreePointShot = .65;
				break;
			case 6: 
				homeTurnover = .15 + .06;
				homeThreePointShot = .66;
				break;
			case 7:
				homeTurnover = .15 + .07;
				homeThreePointShot = .67;
				break;
			case 8:
				homeTurnover = .15 + .08;
				homeThreePointShot = .68;	
				break;
			case 9:
				homeTurnover = .15 + .09;
				homeThreePointShot = .69;
				break;	
			case 10:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;		
			case 11:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;	
			case 12:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;
			case 13:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;
			case 14:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;
			case 15:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;
			case 16:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;
			case 17:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;
			case 18:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				break;
			case 19:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
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
				break;
			case 2:
				 awayTurnover = .15 - .02;
				 awayThreePointShot = .65;
				 break;
			case 3: 
				awayTurnover = .15 - .03;
				awayThreePointShot = .64;
				break;
			case 4: 
				awayTurnover = .15 - .04;
				awayThreePointShot = .63;
				break;
			case 5:
				awayTurnover = .15 - .05;
				awayThreePointShot = .62;
				break;
			case 6: 
				awayTurnover = .15 - .06;
				awayThreePointShot = .61;
				break;
			case 7:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 8:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;	
				break;
			case 9:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;	
			case 10:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;		
			case 11:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;	
			case 12:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 13:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 14:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 15:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 16:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 17:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 18:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				break;
			case 19:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
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
				break;
			case 2:
				 awayTurnover = .15 + .02;
				 awayThreePointShot = .62;
				 break;
			case 3: 
				awayTurnover = .15 + .03;
				awayThreePointShot = .63;
				break;
			case 4: 
				awayTurnover = .15 + .04;
				awayThreePointShot = .64;
				break;
			case 5:
				awayTurnover = .15 + .05;
				awayThreePointShot = .65;
				break;
			case 6: 
				awayTurnover = .15 + .06;
				awayThreePointShot = .66;
				break;
			case 7:
				awayTurnover = .15 + .07;
				awayThreePointShot = .67;
				break;
			case 8:
				awayTurnover = .15 + .08;
				awayThreePointShot = .68;	
				break;
			case 9:
				awayTurnover = .15 + .09;
				awayThreePointShot = .69;
				break;	
			case 10:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;		
			case 11:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;	
			case 12:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			case 13:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			case 14:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			case 15:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			case 16:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			case 17:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			case 18:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			case 19:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				break;
			default:
				break;
		}		
	}
	if(homeReboundRating > awayReboundRating){

		switch(homeReboundDifference){

			case 1:
				homeRebound = .50 + .01;
				break;
			case 2:
				homeRebound = .50 + .02;
				break;
			case 3: 
				homeRebound = .50 + .03;
				break;
			case 4: 
				homeRebound = .50 + .04;
				break;
			case 5:
				homeRebound = .50 + .05;
				break;
			case 6: 
				homeRebound = .50 + .06;
				break;
			case 7:
				homeRebound = .50 + .07;
				break;
			case 8:
				homeRebound = .50 + .08;
				break;
			case 9:
				homeRebound = .50 + .09;
				break;	
			case 10:
				homeRebound = .50 + .10;
				break;		
			case 11:
				homeRebound = .50 + .11;	
				break;	
			case 12:
				homeRebound = .50 + .12;
				break;
			case 13:
				homeRebound = .50 + .13;
				break;
			case 14:
				homeRebound = .50 + .14;
				break;
			case 15:
				homeRebound = .50 + .16;
				break;
			case 16:
				homeRebound = .50 + .17;
				break;
			case 17:
				homeRebound = .50 + .18;
				break;
			case 18:
				homeRebound = .50 + .19;
				break;
			case 19:
				homeRebound = .50 + .20;
				break;
			default:
				break;
		}		
	}
	if(awayReboundRating > homeReboundRating){

		switch(awayReboundDifference){

			case 1:
				awayRebound = .50 + .01;
				break;
			case 2:
				 awayRebound = .50 + .02;
				 break;
			case 3: 
				awayRebound = .50 + .03;
				break;
			case 4: 
				awayRebound = .50 + .04;
				break;
			case 5:
				awayRebound = .50 + .05;
				break;
			case 6: 
				awayRebound = .50 + .06;
				break;
			case 7:
				awayRebound = .50 + .07;
				break;
			case 8:
				awayRebound = .50 + .08;
				break;
			case 9:
				awayRebound = .50 + .09;
				break;	
			case 10:
				awayRebound = .50 + .10;
				break;		
			case 11:
				awayRebound = .50 + .11;	
				break;	
			case 12:
				awayRebound = .50 + .12;
				break;
			case 13:
				awayRebound = .50 + .13;
				break;
			case 14:
				awayRebound = .50 + .14;
				break;
			case 15:
				awayRebound = .50 + .16;
				break;
			case 16:
				awayRebound = .50 + .17;
				break;
			case 17:
				awayRebound = .50 + .18;
				break;
			case 18:
				awayRebound = .50 + .19;
				break;
			case 19:
				awayRebound = .50 + .20;
				break;
			default:
				break;
		}		
	}
}

// Gets the offensive percentages for both teams
function offensivePercentages(homeTeamTwoPoint, homeTeamThreePoint, homeTeamFT, awayTeamTwoPoint, awayTeamThreePoint, awayTeamFT){

	this.homeTeamTwoPoint = homeTeamTwoPoint;
	this.awayTeamTwoPoint = awayTeamTwoPoint;
	this.homeTeamThreePoint = homeTeamThreePoint;
	this.awayTeamThreePoint = awayTeamThreePoint;
	this.homeTeamFT = homeTeamFT;
	this.awayTeamFT = awayTeamFT;

	var findHomeTwoPointPercentage = true;
	var findAwayTwoPointPercentage = false;
	var findHomeThreePointPercentage = false;
	var findAwayThreePointPercentage = false;
	var	findHomeFTPercentage = false;
	var	findAwayFTPercentage = false;
	var num;
	var finalNum;


	switch(homeTeamTwoPoint){
		case 75:
			homeTeamTwoPointPercentage = .35;
			break;
		case 76:
			homeTeamTwoPointPercentage = .36;
			break;
		case 77:
			homeTeamTwoPointPercentage = .37;
			break;
		case 78:
			homeTeamTwoPointPercentage = .38;
			break;
		case 79:
			homeTeamTwoPointPercentage = .39;
			break;
		case 80:
			homeTeamTwoPointPercentage = .41;
			break;
		case 81:
			homeTeamTwoPointPercentage = .40;
			break;
		case 82:
			homeTeamTwoPointPercentage = .41;
			break;
		case 83:		
			homeTeamTwoPointPercentage = .42;
			break;
		case 84:
			homeTeamTwoPointPercentage = .43;
			break;
		case 85:
			homeTeamTwoPointPercentage = .44;
			break;
		case 86:
			homeTeamTwoPointPercentage = .45;
			break;
		case 87:
			homeTeamTwoPointPercentage = .46;
			break;
		case 88:
			homeTeamTwoPointPercentage = .47;
			break;
		case 89:
			homeTeamTwoPointPercentage = .48;
			break;
		case 90:
			homeTeamTwoPointPercentage = .49;
			break;
		case 91:
			homeTeamTwoPointPercentage = .50;
			break;
		case 92:
			homeTeamTwoPointPercentage = .51;
			break;
		case 93:
			homeTeamTwoPointPercentage = .52;
			break;
		case 94:
			homeTeamtwoPointPercentage = .53;
			break;
		case 95:
			homeTeamTwoPointPercentage = .54;
			break;
		default:
			break;
	}

	switch(awayTeamTwoPoint){
		case 75:
			awayTeamTwoPointPercentage = .35;
			break;
		case 76:
			awayTeamTwoPointPercentage = .36;
			break;
		case 77:
			awayTeamTwoPointPercentage = .37;
			break;
		case 78:
			awayTeamTwoPointPercentage = .38;
			break;
		case 79:
			awayTeamTwoPointPercentage = .39;
			break;
		case 80:
			awayTeamTwoPointPercentage = .41;
			break;
		case 81:
			awayTeamTwoPointPercentage = .40;
			break;
		case 82:
			awayTeamTwoPointPercentage = .41;
			break;
		case 83:		
			awayTeamTwoPointPercentage = .42;
			break;
		case 84:
			awayTeamTwoPointPercentage = .43;
			break;
		case 85:
			awayTeamTwoPointPercentage = .44;
			break;
		case 86:
			awayTeamTwoPointPercentage = .45;
			break;
		case 87:
			awayTeamTwoPointPercentage = .46;
			break;
		case 88:
			awayTeamTwoPointPercentage = .47;
			break;
		case 89:
			awayTeamTwoPointPercentage = .48;
			break;
		case 90:
			awayTeamTwoPointPercentage = .49;
			break;
		case 91:
			awayTeamTwoPointPercentage = .50;
			break;
		case 92:
			awayTeamTwoPointPercentage = .51;
			break;
		case 93:
			awayTeamTwoPointPercentage = .52;
			break;
		case 94:
			awayTeamTwoPointPercentage = .53;
			break;
		case 95:
			awayTeamTwoPointPercentage = .54;
			break;
		default:
			break;
	}
	
	switch(homeTeamThreePoint){
		case 76:
			homeThreePointPercentage = .25;
			break;
		case 77:
			homeThreePointPercentage = .26;
			break;
		case 78:
			homeThreePointPercentage = .27;
			break;
		case 79:
			homeThreePointPercentage = .29;
			break;
		case 80:
			homeThreePointPercentage = .30;
			break;
		case 81:
			homeThreePointPercentage = .31;
			break;
		case 82:
			homeThreePointPercentage = .32;
			break;
		case 83:
			homeThreePointPercentage = .33;
			break;
		case 84:
			homeThreePointPercentage = .34;
			break;
		case 85:
			homeThreePointPercentage = .35;
			break;
		case 86:
			homeThreePointPercentage = .35;
			break;
		case 87:
			homeThreePointPercentage = .35;
			break;
		case 88:
			homeThreePointPercentage = .35;
			break;
		case 89:
			homeThreePointPercentage = .36;
			break;
		case 90:
			homeThreePointPercentage = .38;
			break;
		case 91:
			homeThreePointPercentage = .36;
			break;
		case 92:
			homeThreePointPercentage = .40;
			break;
		case 93:
			homeThreePointPercentage = .40;
			break;
		case 94:
			homeThreePointPercentage = .41;
			break;
		case 95:
			homeThreePointPercentage= .45;
			break;
		default:
			break;
	}
	
	switch(awayTeamThreePoint){
		case 76:
			awayThreePointPercentage = .25;
			break;
		case 77:
			awayThreePointPercentage = .26;
			break;
		case 78:
			awayThreePointPercentage = .27;
			break;
		case 79:
			awayThreePointPercentage = .29;
			break;
		case 80:
			awayThreePointPercentage = .30;
			break;
		case 81:
			awayThreePointPercentage = .31;
			break;
		case 82:
			awayThreePointPercentage = .32;
			break;
		case 83:
			awayThreePointPercentage = .33;
			break;
		case 84:
			awayThreePointPercentage = .34;
			break;
		case 85:
			awayThreePointPercentage = .35;
			break;
		case 86:
			awayThreePointPercentage = .35;
			break;
		case 87:
			awayThreePointPercentage = .35;
			break;
		case 88:
			awayThreePointPercentage = .35;
			break;
		case 89:
			awayThreePointPercentage = .36;
			break;
		case 90:
			awayThreePointPercentage = .38;
			break;
		case 91:
			awayThreePointPercentage = .36;
			break;
		case 92:
			awayThreePointPercentage = .40;
			break;
		case 93:
			awayThreePointPercentage = .40;
			break;
		case 94:
			awayThreePointPercentage = .41;
			break;
		case 95:
			awayThreePointPercentage= .45;
			break;
		default:
			break;
	}

	homeFTRating = homeTeamFT / 100;
	awayFTRating = awayTeamFT / 100;

}
*/

//Teams
teams[0] = new Team();
teams[1] = new Team();
teams[2] = new Team();
teams[3] = new Team();

//offensivePercentages(0, teams[0].threePTRating, teams[0].ftRating);

// Inital possession
team = teams[3].name;

/*
// Game starts
function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;


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
	currentPossession(team);
	generateResult(currentPossession);
	getResult(result);	
	console.log(name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore)
	count++;
	// End Game
	if(count == 200){
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
*/

// delay = setInterval(function(){gameStart(teams[3], teams[1])}, 5000);
// console.log(teams[3].overall + ", " + teams[1].overall)

//offensivePercentages(teams[0].twoPTRating, teams[0].threePTRating)
