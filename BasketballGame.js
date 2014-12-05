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
var homeFoulPercentage;
var awayFoulPercentage;
var homeOffFoulPercentage;
var awayOffFoulPercentage;
var homeTeamTwoPointPercentage;
var homeTeamThreePointPercentage;
var awayTeamTwoPointPercentage;
var awayTeamThreePointPercentage;
var homeTeamFTPercentage;
var awayTeamFTPercentage;
var homeStealsPercentage;
var awayStealsPercentage;
var homeBlocksPercentage;
var awayBlocksPercentage;
var homeTurnover;
var awayTurnover;
var homeThreePointShot;
var awayThreePointShot;
var homeOffReboundPercentage;
var awayOffReboundPercentage;
var homeDefReboundPercentage;
var awayDefReboundPercentage;
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
var homeTotalBlocks = 0;
var awayTotalBlocks = 0;
var homeFTMade = 0;
var homeFTMissed = 0;
var awayFTMissed = 0;
var awayFTMade = 0;

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

// Set the name of the teams playing
function TeamName(name1, name2){
	this.name1 = name1;
	this.name2 = name2;
}

// Sets the base percentage for each possession. 
function defense(homeOffOverall, homeDefOverall, homeOffReboundRating, homeDefReboundRating, awayOffOverall, awayDefOverall, awayOffReboundRating, awayDefReboundRating){

	this.homeOffOverall = homeOffOverall;
	this.homeDefOverall = homeDefOverall;
	this.awayOffOverall = awayOffOverall;
	this.awayDefOverall = awayDefOverall;
	this.homeOffReboundRating = homeOffReboundRating;
	this.awayOffReboundRating = awayOffReboundRating;
	this.homeDefReboundRating = homeDefReboundRating;
	this.awayDefReboundRating = awayDefReboundRating;

	var homeOffDifference = homeOffOverall - awayDefOverall;
	var awayOffDifference = awayOffOverall - homeDefOverall;
	var homeDefDifference = homeDefOverall - awayOffOverall;
	var awayDefDifference = awayDefOverall - homeOffOverall;
	var homeOffReboundDifference = homeOffReboundRating - awayDefReboundRating;
	var awayOffReboundDifference = awayOffReboundRating- homeDefReboundRating;
	var homeDefReboundDifference  = homeDefReboundRating - awayOffReboundRating;
	var awayDefReboundDifference = awayDefReboundRating - homeOffReboundRating;

	if(homeOffOverall > awayDefOverall){

		switch(homeOffDifference){

			case 1:
				homeTurnover = .15 - .01;
				homeThreePointShot = .66;
				awayFoulPercentage = .15 + .1;
				break;
			case 2:
				homeTurnover = .15 - .02;
				homeThreePointShot = .65;
				awayFoulPercentage = .15 + .2;
				break;
			case 3: 
				homeTurnover = .15 - .03;
				homeThreePointShot = .64;
				awayFoulPercentage = .15 + .3;
				break;
			case 4: 
				homeTurnover = .15 - .04;
				homeThreePointShot = .63;
				awayFoulPercentage = .15 + .3;
				break;
			case 5:
				homeTurnover = .15 - .05;
				homeThreePointShot = .62;
				awayFoulPercentage = .15 + .4;
				break;
			case 6: 
				homeTurnover = .15 - .06;
				homeThreePointShot = .61;
				awayFoulPercentage = .15 + .5;
				break;
			case 7:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .6;
				break;
			case 8:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .7;
				break;
			case 9:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .8;
				break;	
			case 10:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .9;
				break;		
			case 11:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .10;
				break;	
			case 12:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .11;
				break;
			case 13:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .12;
				break;
			case 14:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .13;
				break;
			case 15:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .14;
				break;
			case 16:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .15;
				break;
			case 17:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .15;
				break;
			case 18:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .15;
				break;
			case 19:
				homeTurnover = .15 - .07;
				homeThreePointShot = .60;
				awayFoulPercentage = .15 + .15;
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
				awayOffFoulPercentage = .08;
				break;
			case 2:
				 homeTurnover = .15 + .02;
				 homeThreePointShot = .62;
				 awayOffFoulPercentage = .09;
				 break;
			case 3: 
				homeTurnover = .15 + .03;
				homeThreePointShot = .63;
				awayOffFoulPercentage = .10;
				break;
			case 4: 
				homeTurnover = .15 + .04;
				homeThreePointShot = .64;
				awayOffFoulPercentage = .11;
				break;
			case 5:
				homeTurnover = .15 + .05;
				homeThreePointShot = .65;
				awayOffFoulPercentage = .12;
				break;
			case 6: 
				homeTurnover = .15 + .06;
				homeThreePointShot = .66;
				awayOffFoulPercentage = .13;
				break;
			case 7:
				homeTurnover = .15 + .07;
				homeThreePointShot = .67;
				awayOffFoulPercentage = .14;
				break;
			case 8:
				homeTurnover = .15 + .08;
				homeThreePointShot = .68;	
				awayOffFoulPercentage = .15;
				break;
			case 9:
				homeTurnover = .15 + .09;
				homeThreePointShot = .69;
				awayOffFoulPercentage = .16;
				break;	
			case 10:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .17;
				break;		
			case 11:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .18;
				break;	
			case 12:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .19;
				break;
			case 13:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .20;
				break;
			case 14:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .20;
				break;
			case 15:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .20;
				break;
			case 16:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .20;
				break;
			case 17:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .20;
				break;
			case 18:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .20;
				break;
			case 19:
				homeTurnover = .15 + .10;
				homeThreePointShot = .70;
				awayOffFoulPercentage = .20;
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
				homeFoulPercentage = .16;
				break;
			case 2:
				awayTurnover = .15 - .02;
				awayThreePointShot = .65;
				homeFoulPercentage = .17;
				break;
			case 3: 
				awayTurnover = .15 - .03;
				awayThreePointShot = .64;
				homeFoulPercentage = .18;
				break;
			case 4: 
				awayTurnover = .15 - .04;
				awayThreePointShot = .63;
				homeFoulPercentage = .19;
				break;
			case 5:
				awayTurnover = .15 - .05;
				awayThreePointShot = .62;
				homeFoulPercentage = .20;
				break;
			case 6: 
				awayTurnover = .15 - .06;
				awayThreePointShot = .61;
				homeFoulPercentage = .21;
				break;
			case 7:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .22;
				break;
			case 8:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;	
				homeFoulPercentage = .23;
				break;
			case 9:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .24;
				break;	
			case 10:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .25;
				break;		
			case 11:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .26;
				break;	
			case 12:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .27;
				break;
			case 13:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .28;
				break;
			case 14:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .29;
				break;
			case 15:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .30;
				break;
			case 16:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .30;
				break;
			case 17:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .30;
				break;
			case 18:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .30;
				break;
			case 19:
				awayTurnover = .15 - .07;
				awayThreePointShot = .60;
				homeFoulPercentage = .30;
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
				homeOffFoulPercentage = .08;
				break;
			case 2:
				awayTurnover = .15 + .02;
				awayThreePointShot = .62;
				homeOffFoulPercentage = .09;
				break;
			case 3: 
				awayTurnover = .15 + .03;
				awayThreePointShot = .63;
				homeOffFoulPercentage = .10;
				break;
			case 4: 
				awayTurnover = .15 + .04;
				awayThreePointShot = .64;
				homeOffFoulPercentage = .11;
				break;
			case 5:
				awayTurnover = .15 + .05;
				awayThreePointShot = .65;
				homeOffFoulPercentage = .12;
				break;
			case 6: 
				awayTurnover = .15 + .06;
				awayThreePointShot = .66;
				homeOffFoulPercentage = .13;
				break;
			case 7:
				awayTurnover = .15 + .07;
				awayThreePointShot = .67;
				homeOffFoulPercentage = .14;
				break;
			case 8:
				awayTurnover = .15 + .08;
				awayThreePointShot = .68;	
				homeOffFoulPercentage = .15;
				break;
			case 9:
				awayTurnover = .15 + .09;
				awayThreePointShot = .69;
				homeOffFoulPercentage = .16;
				break;	
			case 10:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .17;
				break;		
			case 11:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .18;
				break;	
			case 12:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .19;
				break;
			case 13:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .20;
				break;
			case 14:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .20;
				break;
			case 15:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .20;
				break;
			case 16:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .20;
				break;
			case 17:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .20;
				break;
			case 18:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .20;
				break;
			case 19:
				awayTurnover = .15 + .10;
				awayThreePointShot = .70;
				homeOffFoulPercentage = .20;
				break;
			default:
				break;
		}		
	}
	if(homeOffReboundRating > awayDefReboundRating){

		switch(homeOffReboundDifference){

			case 1:
				homeOffRebound = .50 + .01;
				break;
			case 2:
				homeOffRebound = .50 + .02;
				break;
			case 3: 
				homeOffRebound = .50 + .03;
				break;
			case 4: 
				homeOffRebound = .50 + .04;
				break;
			case 5:
				homeOffRebound = .50 + .05;
				break;
			case 6: 
				homeOffRebound = .50 + .06;
				break;
			case 7:
				homeOffRebound = .50 + .07;
				break;
			case 8:
				homeOffRebound = .50 + .08;
				break;
			case 9:
				homeOffRebound = .50 + .09;
				break;	
			case 10:
				homeOffRebound = .50 + .10;
				break;		
			case 11:
				homeOffRebound = .50 + .11;	
				break;	
			case 12:
				homeOffRebound = .50 + .12;
				break;
			case 13:
				homeOffRebound = .50 + .13;
				break;
			case 14:
				homeOffRebound = .50 + .14;
				break;
			case 15:
				homeOffRebound = .50 + .16;
				break;
			case 16:
				homeOffRebound = .50 + .17;
				break;
			case 17:
				homeOffRebound = .50 + .18;
				break;
			case 18:
				homeOffRebound = .50 + .19;
				break;
			case 19:
				homeOffRebound = .50 + .20;
				break;
			default:
				break;
		}		
	}
	if(homeDefReboundRating > awayOffReboundRating){

		switch(homeDefReboundDifference){

			case 1:
				homeDefRebound = .50 + .01;
				break;
			case 2:
				homeDefRebound = .50 + .02;
				break;
			case 3: 
				homeDefRebound = .50 + .03;
				break;
			case 4: 
				homeDefRebound = .50 + .04;
				break;
			case 5:
				homeDefRebound = .50 + .05;
				break;
			case 6: 
				homeDefRebound = .50 + .06;
				break;
			case 7:
				homeDefRebound = .50 + .07;
				break;
			case 8:
				homeDefRebound = .50 + .08;
				break;
			case 9:
				homeDefRebound = .50 + .09;
				break;	
			case 10:
				homeDefRebound = .50 + .10;
				break;		
			case 11:
				homeDefRebound = .50 + .11;	
				break;	
			case 12:
				homeDefRebound = .50 + .12;
				break;
			case 13:
				homeDefRebound = .50 + .13;
				break;
			case 14:
				homeDefRebound = .50 + .14;
				break;
			case 15:
				homeDefRebound = .50 + .16;
				break;
			case 16:
				homeDefRebound = .50 + .17;
				break;
			case 17:
				homeDefRebound = .50 + .18;
				break;
			case 18:
				homeDefRebound = .50 + .19;
				break;
			case 19:
				homeDefRebound = .50 + .20;
				break;
			default:
				break;
		}		
	}
	if(awayOffReboundRating > homeDefReboundRating){

		switch(awayOffReboundDifference){

			case 1:
				awayOffRebound = .50 + .01;
				break;
			case 2:
				awayOffRebound = .50 + .02;
				break;
			case 3: 
				awayOffRebound = .50 + .03;
				break;
			case 4: 
				awayOffRebound = .50 + .04;
				break;
			case 5:
				awayOffRebound = .50 + .05;
				break;
			case 6: 
				awayOffRebound = .50 + .06;
				break;
			case 7:
				awayOffRebound = .50 + .07;
				break;
			case 8:
				awayOffRebound = .50 + .08;
				break;
			case 9:
				awayOffRebound = .50 + .09;
				break;	
			case 10:
				awayOffRebound = .50 + .10;
				break;		
			case 11:
				awayOffRebound = .50 + .11;	
				break;	
			case 12:
				awayOffRebound = .50 + .12;
				break;
			case 13:
				awayOffRebound = .50 + .13;
				break;
			case 14:
				awayOffRebound = .50 + .14;
				break;
			case 15:
				awayOffRebound = .50 + .16;
				break;
			case 16:
				awayOffRebound = .50 + .17;
				break;
			case 17:
				awayOffRebound = .50 + .18;
				break;
			case 18:
				awayOffRebound = .50 + .19;
				break;
			case 19:
				awayOffRebound = .50 + .20;
				break;
			default:
				break;
		}		
	}
	if(awayDefReboundRating > homeOffReboundRating){

		switch(awayDefReboundDifference){

			case 1:
				awayDefRebound = .50 + .01;
				break;
			case 2:
				 awayDefRebound = .50 + .02;
				 break;
			case 3: 
				awayDefRebound = .50 + .03;
				break;
			case 4: 
				awayDefRebound = .50 + .04;
				break;
			case 5:
				awayDefRebound = .50 + .05;
				break;
			case 6: 
				awayDefRebound = .50 + .06;
				break;
			case 7:
				awayDefRebound = .50 + .07;
				break;
			case 8:
				awayDefRebound = .50 + .08;
				break;
			case 9:
				awayDefRebound = .50 + .09;
				break;	
			case 10:
				awayDefRebound = .50 + .10;
				break;		
			case 11:
				awayDefRebound = .50 + .11;	
				break;	
			case 12:
				awayDefRebound = .50 + .12;
				break;
			case 13:
				awayDefRebound = .50 + .13;
				break;
			case 14:
				awayDefRebound = .50 + .14;
				break;
			case 15:
				awayDefRebound = .50 + .16;
				break;
			case 16:
				awayDefRebound = .50 + .17;
				break;
			case 17:
				awayDefRebound = .50 + .18;
				break;
			case 18:
				awayDefRebound = .50 + .19;
				break;
			case 19:
				awayDefRebound = .50 + .20;
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

//Sets the defensive percentages for blocks and steals
function defensivePercentages(homeStealsRating, homeBlocksRating, awayStealsRating, awayBlocksRating){

	this.homeStealsRating = homeStealsRating;
	this.awayStealsRating = awayStealsRating;
	this.homeBlocksRating = homeBlocksRating;
	this.awayBlocksRating = awayBlocksRating;

	switch(homeStealsRating){

		case 76:
			homeStealsPercentage = .05;
			break;
		case 77:
			homeStealsPercentage = .05;
			break;
		case 78:
			homeStealsPercentage = .05;
			break;
		case 79:
			homeStealsPercentage = .05;
			break;
		case 80:
			homeStealsPercentage = .06;
			break;
		case 81: 
			homeStealsPercentage = .06;
			break;
		case 82:
			homeStealsPercentage = .06;
			break;
		case 83:
			homeStealsPercentage = .06;
			break;
		case 84: 
			homeStealsPercentage = .07;
			break;
		case 85:
			homeStealsPercentage = .07;
			break;
		case 86:
			homeStealsPercentage = .07;
			break;	
		case 87:
			homeStealsPercentage = .07;
			break;
		case 88:
			homeStealsPercentage = .08;
			break;
		case 89:
			homeStealsPercentage = .09;
			break;
		case 90:
			homeStealsPercentage = .09;
			break;
		case 91:
			homeStealsPercentage = .10;
			break;
		case 92:
			homeStealsPercentage = .10;
			break;
		case 93:
			homeStealsPercentage = .11;
			break;
		case 94: 
			homeStealsPercentage = .12;
			break;
		case 95:
			homeStealsPercentage = .12;
			break;
	}
	switch(awayStealsRating){
		case 76:
			awayStealsPercentage = .05;
			break;
		case 77:
			awayStealsPercentage = .05;
			break;
		case 78:
			awayStealsPercentage = .05;
			break;
		case 79:
			awayStealsPercentage = .05;
			break;
		case 80:
			awayStealsPercentage = .06;
			break;
		case 81: 
			awayStealsPercentage = .06;
			break;
		case 82:
			awayStealsPercentage = .06;
			break;
		case 83:
			awayStealsPercentage = .06;
			break;
		case 84: 
			awayStealsPercentage = .07;
			break;
		case 85:
			awayStealsPercentage = .07;
			break;
		case 86:
			awayStealsPercentage = .07;
			break;	
		case 87:
			awayStealsPercentage = .07;
			break;
		case 88:
			awayStealsPercentage = .08;
			break;
		case 89:
			awayStealsPercentage = .09;
			break;
		case 90:
			awayStealsPercentage = .09;
			break;
		case 91:
			awayStealsPercentage = .10;
			break;
		case 92:
			awayStealsPercentage = .10;
			break;
		case 93:
			awayStealsPercentage = .11;
			break;
		case 94: 
			awayStealsPercentage = .12;
			break;
		case 95:
			awayStealsPercentage = .12;
			break;
	}
	switch(homeBlocksRating){

		case 76:
			homeBlocksPercentage = .05;
			break;
		case 77:
			homeBlocksPercentage = .05;
			break;
		case 78:
			homeBlocksPercentage = .05;
			break;
		case 79:
			homeBlocksPercentage = .05;
			break;
		case 80:
			homeBlocksPercentage = .06;
			break;
		case 81: 
			homeBlocksPercentage = .06;
			break;
		case 82:
			homeBlocksPercentage = .06;
			break;
		case 83:
			homeBlocksPercentage = .06;
			break;
		case 84: 
			homeBlocksPercentage = .07;
			break;
		case 85:
			homeBlocksPercentage = .07;
			break;
		case 86:
			homeBlocksPercentage = .07;
			break;	
		case 87:
			homeBlocksPercentage = .07;
			break;
		case 88:
			homeBlocksPercentage = .08;
			break;
		case 89:
			homeBlocksPercentage = .09;
			break;
		case 90:
			homeBlocksPercentage = .09;
			break;
		case 91:
			homeBlocksPercentage = .10;
			break;
		case 92:
			homeBlocksPercentage = .10;
			break;
		case 93:
			homeBlocksPercentage = .11;
			break;
		case 94: 
			homeBlocksPercentage = .12;
			break;
		case 95:
			homeBlocksPercentage = .12;
			break;
	}
	switch(awayBlocksRating){

		case 76:
			awayBlocksPercentage = .05;
			break;
		case 77:
			awayBlocksPercentage = .05;
			break;
		case 78:
			awayBlocksPercentage = .05;
			break;
		case 79:
			awayBlocksPercentage = .05;
			break;
		case 80:
			awayBlocksPercentage = .06;
			break;
		case 81: 
			awayBlocksPercentage = .06;
			break;
		case 82:
			awayBlocksPercentage = .06;
			break;
		case 83:
			awayBlocksPercentage = .06;
			break;
		case 84: 
			awayBlocksPercentage = .07;
			break;
		case 85:
			awayBlocksPercentage = .07;
			break;
		case 86:
			awayBlocksPercentage = .07;
			break;	
		case 87:
			awayBlocksPercentage = .07;
			break;
		case 88:
			awayBlocksPercentage = .08;
			break;
		case 89:
			awayBlocksPercentage = .09;
			break;
		case 90:
			awayBlocksPercentage = .09;
			break;
		case 91:
			awayBlocksPercentage = .10;
			break;
		case 92:
			awayBlocksPercentage = .10;
			break;
		case 93:
			awayBlocksPercentage = .11;
			break;
		case 94: 
			awayBlocksPercentage = .12;
			break;
		case 95:
			awayBlocksPercentage = .12;
			break;
	}

}

//Teams
teams[0] = new Team("Minnesota");
teams[1] = new Team("Wisconsin");
teams[2] = new Team("Los Angeles");
teams[3] = new Team("New York");

// Inital possession
team = teams[3].name;


// Game starts
function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;


	TeamName(team1.name, team2.name);
	defense(team1.offOverall, team1.defOverall, team1.offReboundRating, team1.defReboundRating,  team2.offOverall, team2.defOverall, team2.offReboundRating, team2.defReboundRating);
	offensivePercentages(team1.twoPTRating, team1.threePTRating, team1.ftRating, team2.twoPTRating, team2.threePTRating, team2.ftRating);
	defensivePercentages(team1.stealsRating, team1.blocksRating, team2.stealsRating, team2.blocksRating);

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
				console.log(team1.name + " turnover")
				homeTurnovers++;
				team = team2.name;
			}
			else if(num > homeTurnover && num < homeThreePointShot){
				console.log(team1.name + " shoots a 2 pointer...")
				num = Math.random();
				if(num <= awayBlocksPercentage){
					console.log(team2.name + " blocked the shot!")
					console.log("Loose ball...")
					homeTotalBlocks++;
					num = Math.random();
					if(num < .50){
						console.log(team1.name + " has possession");
						team = team1.name;
					}
					else{
						console.log(team2.name + " has possession");
						team = team2.name; 
					}
				}
				else if(num <= awayFoulPercentage){
					console.log(team2.name + " foul..")
					num = Math.random();
					if(num <= .35){
						console.log(team1.name + " shoots. Three point play!")
						homeTeamScore = homeTeamScore + 2;
						console.log("One foul shot for " + name1)
						console.log(team1.name + " shoots the foul shot..")
						num = Math.random();
						if(num <= homeTeamFTPercentage){
							console.log(team1.name + "  made the free throw");
							homeTeamScore++;
							team = team2.name;
						}
						else{
							console.log(team1.name + " missed the free throw.")
							num = Math.random();
							if(num <= homeOffReboundPercentage){
								console.log(team1.name + " missed the free throw. " + team1.name + " offensive rebound.")
								homeOffRebound++;
								team = team1.name;
							}
							else{
								console.log(team1.name + " missed the free throw. " + team2.name + " defensive rebound.")
								awayDefRebound++;
								team = team2.name;
							}
						}
					}
					else{
						console.log(team1.name + " missed the shot. " + team1.name + " has two free throws")
						console.log(team1.name + " shoots the first free throw")
						num = Math.random();
						if(num <= homeTeamFTPercentage){
							console.log("Free throw made")
							homeTeamScore++;
							num = Math.random();
							console.log(team1.name + " shoots the second free throw..")
							if(num <= homeTeamFTPercentage){
								console.log("Free throw made")
								homeTeamScore++;
								team = team2.name;
							}
							else{
								console.log("Free throw missed")
								num = Math.random();
								if(num <= homeOffRebound){
									console.log(team1.name + " offensive rebound.")
									homeOffRebound++;
									team = team1.name;
								}	
								else{
									console.log(team2.name + " defensive rebound.")
									homeDefRebound++;
									team = team2.name;
								}
							}
						}
						else{
							console.log("Free throw missed")
							num = Math.random();
							if(num <= homeOffReboundPercentage){
								console.log(team1.name + " offensive rebound.")
								team = team1.name;
								homeOffRebound++;
							}
							else{
								console.log(team2.name + " defensive rebound.")
								team = team2.name;
								awayDefRebound++;
							}
						}
					}
				}
				else{
					if(num <= homeTeamTwoPointPercentage){
					console.log(team1.name + " scored two points!")
					madeHome2ptShot++;
					homeTeamScore = homeTeamScore + 2;
					}
					else{
						console.log(team1.name + " missed the shot..")
						num = Math.random();
						if(num < homeOffReboundPercentage){
							console.log(team1.name + " offensive rebound.")
							team = team1.name;
							homeOffRebound++;
						}
						else{
							console.log(team2.name + " offensive rebound.")
							team = team2.name;
							homeDefRebound++;
						}
					}
				}	
			}	
			else if(num > homeThreePointShot){
				num = Math.random();
				console.log(team1.name + " shoots a 3 pointer...")
				if(num <= awayBlocksPercentage){
					console.log(team2.name + " blocked the shot!")
					console.log("Loose ball...")
					homeTotalBlocks++;
					num = Math.random();
					if(num < .50){
						console.log(team1.name + " has possession");
						team = team1.name;
					}
					else{
						console.log(team2.name + " has possession");
						team = team2.name; 
					}
				}
				else if(num > awayBlocksPercentage && num <= awayFoulPercentage){
					console.log(team2.name + " foul..")
					var homeFoulShots = true;
					var foulShotsAttempted = 1;
					num = Math.random();
					if(num <= .15){
						console.log(team1.name + " made the shot! Four point play!")
						homeTeamScore = homeTeamScore + 3;
						madeHome3ptShot++;
						console.log(team1.name + " shoots the free throw..")
						num = Math.random();
						if(num <= homeTeamFTPercentage){
							console.log(team1.name + " made the free throw")
							homeTeamScore++;
							homeFTMade++;
							team = team2.name;
						}
						else{
							console.log(team1.name + " missed the free throw")
							num = Math.random();
							homeFTMissed++;
							if(num <= homeOffReboundPercentage){
								console.log(team1.name + " offensive rebound.")
								homeOffRebound++;
								team = team1.name;
							}
							else{
								console.log(team2.name + " defensive rebound.")
								awayDefRebound++;
								team = team2.name;
							}
						}
					}
					while(homeFoulShots){
						num = Math.random();
						if(num <= homeTeamFTPercentage){
							console.log("Free throw made")
							homeTeamScore++;
							homeFTMade++;
							foulShotsAttempted++;
							if(foulShotsAttempted == 3){
								num = Math.random();
								if(num <= homeOffRebound){
									console.log(team1.name + " missed the final free throw. " + team1.name + " offensive rebound.");
									team = team1.name;
									foulShotsAttempted == 1;
									homeFoulShots = false;
								}
								else{
									console.log(team1.name + " missed the final free throw. " + team2.name + " defensive rebound.");
									team = team2.name;
									homeFTMissed++;
									foulShotsAttempted == 1;
									homeFoulShots = false;
								}
							}
							else{
								homeFoulShots = true;
							}
						}
						else{
							console.log("free throw missed")
							foulShotsAttempted++;
							if(foulShotsAttempted == 3){
								num = Math.random();
								if(num <= homeOffRebound){
									console.log(team1.name + " missed the final free throw. " + team1.name + " with the offensive rebound.");
									team = team1.name;
									foulShotsAttempted == 1;
									homeFoulShots = false;
								}
								else{
									console.log(team1.name + " missed the final free throw. " + team2.name + " with the defensive rebound.");
									team = team2.name;
									foulShotsAttempted == 1;
									homeFoulShots = false;
								}
							}
							else{
								homeFoulShots = true;
							}
						}
					}
				}
				else{
					if(num <= homeTeamThreePointPercentage){
					console.log(team1.name + " scored three points!")
					madeHome3ptShot++;
					homeTeamScore = homeTeamScore + 3;
					team = team2.name;
					}
					else{
						num = Math.random();
						if(num <= homeOffReboundPercentage){
							console.log(team1.name + " missed the shot." + team1.name + " rebounded the ball.")
							missedShot3ptHome++;
							homeOffRebound++;
							team = team1.name;
						}
						else {
							console.log(team1.name + " missed the shot." + team2.name + " rebounded the ball.")
							missedShot3ptHome++;
							awayDefRebound++;
							team = team2.name;
						}
					}
				}
			}
		}
	

		// Away Team's possession
		if(possession == team2.name){
			// Away Team
				num = Math.random();
			if(num < awayTurnover){
				console.log(team2.name + " turnover")
				awayTurnovers++;
				team = team2.name;
			}
			else if(num > awayTurnover && num < awayThreePointShot){
				console.log(team2.name + " shoots a 2 pointer...")
				num = Math.random();
				if(num <= homeBlocksPercentage){
					console.log(team2.name + " blocked the shot!")
					console.log("Loose ball...")
					awayTotalBlocks++;
					num = Math.random();
					if(num < .50){
						console.log(team2.name + " has possession");
						team = team2.name;
					}
					else{
						console.log(team2.name + " has possession");
						team = team1.name; 
					}
				}
				else if(num >= homeBlocksPercentage && num <= homeFoulPercentage){
					console.log(team2.name + " foul..")
					num = Math.random();
					if(num <= .35){
						console.log(team2.name + " shoots. Three point play!")
						awayTeamScore = awayTeamScore + 2;
						console.log("One foul shot for " + name1)
						console.log(team2.name + " shoots the free throw..")
						num = Math.random();
						if(num <= awayTeamFTPercentage){
							console.log(team2.name + " made the free throw");
							awayTeamScore++;
							awayFTMade++;
							team = team2.name;
						}
						else{
							console.log(team2.name + " missed the free throw.")
							num = Math.random();
							awayFTMissed++;
							if(num <= awayOffReboundPercentage){
								console.log(team2.name + " missed the free throw. " + team2.name + " offensive rebound.")
								awayOffRebound++;
								team = team2.name;
							}
							else{
								console.log(team2.name + " missed the free throw. " + team1.name + " defensive rebound.")
								awayDefRebound++;
								team = team1.name;
							}
						}
					}
					else{
						console.log(team2.name + " missed the shot. " + team2.name + " has two foul shots")
						console.log(team2.name + " shoots the first free throw")
						num = Math.random();
						if(num <= awayTeamFTPercentage){
							console.log("Free throw made")
							awayTeamScore++;
							awayFTMade++;
							num = Math.random();
							console.log(team2.name + " shoots the second free throw..")
							if(num <= awayTeamFTPercentage){
								console.log("Free throw made")
								awayTeamScore++;
								awayFTMade++;
								team = team1.name;
							}
							else{
								console.log("Free throw missed")
								num = Math.random();
								if(num <= awayOffRebound){
									console.log(team2.name + " offensive rebound.")
									awayOffRebound++;
									awayFTMissed++;
									team = team2.name;
								}	
								else{
									console.log(team2.name + " defensive rebound.")
									awayDefRebound++;
									awayFTMissed++;
									team = team1.name;
								}
							}
						}
						else{
							console.log("Free throw missed")
							num = Math.random();
							if(num <= awayOffReboundPercentage){
								console.log(team2.name + " offensive rebound.")
								team = team2.name;
								awayOffRebound++;
								awayFTMissed++;
							}
							else{
								console.log(team2.name + " defensive rebound.")
								team = team2.name;
								awayDefRebound++;
								awayFTMissed++;
							}
						}
					}
				}
				else{
					if(num <= awayTeamTwoPointPercentage){
					console.log(team2.name + " scored two points!")
					madeAway2ptShot++;
					awayTeamScore = awayTeamScore + 2;
					}
					else{
						console.log(team2.name + " missed the shot..")
						num = Math.random();
						missedShot2ptAway++;
						if(num < awayOffReboundPercentage){
							console.log(team2.name + " offensive rebound.")
							team = team2.name;
							awayOffRebound++;
						}
						else{
							console.log(team2.name + " offensive rebound.")
							team = team1.name;
							awayDefRebound++;
						}
					}
				}	
			}	
			else if(num > awayThreePointShot){
				num = Math.random();
				console.log(team2.name + " shoots a 3 pointer...")
				if(num <= awayBlocksPercentage){
					console.log(team2.name + " blocked the shot!")
					console.log("Loose ball...")
					awayTotalBlocks++;
					num = Math.random();
					if(num < .50){
						console.log(team2.name + " has possession");
						team = team2.name;
					}
					else{
						console.log(team1.name + " has possession");
						team = team1.name; 
					}
				}
				else if(num > awayBlocksPercentage && num <= awayFoulPercentage){
					console.log(team2.name + " foul..")
					var awayFoulShots = true;
					var foulShotsAttempted = 1;
					num = Math.random();
					if(num <= .15){
						console.log(team2.name + " made the shot! Four point play!")
						awayTeamScore = awayTeamScore + 3;
						madeHome3ptShot++;
						console.log(team2.name + " shoots the free throw..")
						num = Math.random();
						if(num <= awayTeamFTPercentage){
							console.log(team2.name + " made the free throw")
							awayTeamScore++;
							awayFTMade++;
							team = team2.name;
						}
						else{
							console.log(team2.name + " missed the free throw")
							num = Math.random();
							awayFTMissed++;
							if(num <= awayOffReboundPercentage){
								console.log(team2.name + " offensive rebound.")
								awayOffRebound++;
								team = team2.name;
							}
							else{
								console.log(team2.name + " defensive rebound.")
								awayDefRebound++;
								team = team1.name;
							}
						}
					}
					while(awayFoulShots){
						num = Math.random();
						if(num <= awayTeamFTPercentage){
							console.log("Free throw made")
							awayTeamScore++;
							awayFTMade++;
							foulShotsAttempted++;
							if(foulShotsAttempted == 3){
								num = Math.random();
								if(num <= awayOffReboundPercentage){
									console.log(team2.name + " missed the final free throw. " + team2.name + " offensive rebound.");
									team = team2.name;
									foulShotsAttempted == 1;
									awayFoulShots = false;
								}
								else{
									console.log(team2.name + " missed the final free throw. " + team1.name + " defensive rebound.");
									team = team1.name;
									awayFTMissed++;
									foulShotsAttempted == 1;
									awayFoulShots = false;
								}
							}
							else{
								awayFoulShots = true;
							}
						}
						else{
							console.log("free throw missed")
							foulShotsAttempted++;
							awayFTMissed++;
							if(foulShotsAttempted == 3){
								num = Math.random();
								if(num <= awayOffReboundPercentage){
									console.log(team2.name + " missed the final free throw. " + team2.name + " with the offensive rebound.");
									team = team2.name;
									foulShotsAttempted == 1;
									awayFoulShots = false;
								}
								else{
									console.log(team2.name + " missed the final free throw. " + team1.name + " with the defensive rebound.");
									team = team1.name;
									foulShotsAttempted == 1;
									awayFoulShots = false;
								}
							}
							else{
								awayFoulShots = true;
							}
						}
					}
				}
				else{
					if(num <= awayTeamThreePointPercentage){
					console.log(team2.name + " scored three points!")
					madeHome3ptShot++;
					awayTeamScore = awayTeamScore + 3;
					team = team2.name;
					}
					else{
						num = Math.random();
						if(num <= awayOffReboundPercentage){
							console.log(team2.name + " missed the shot." + team2.name + " rebounded the ball.")
							missedShot3ptHome++;
							awayOffRebound++;
							team = team2.name
						}
						else {
							console.log(team2.name + " missed the shot." + team1.name + " rebounded the ball.")
							missedShot3ptHome++;
							awayDefRebound++;
							team = team1.name;
						}
					}
				}
			}
		}		

	}

	//function calls
	currentPossession(team);
	generateResult(currentPossession);
	console.log(name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore)
	count++;
	// End Game
	if(count == 250){
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
delay = setInterval(function(){gameStart(teams[0], teams[3])}, 500);
console.log(teams[0].offOverall + ", " +  teams[0].defOverall + ", " + teams[3].offOverall + ", " + teams[3].defOverall)


