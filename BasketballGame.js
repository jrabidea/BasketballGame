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
var homeThreePointShot = .65;
var awayThreePointShot = .65;
var homeOffReboundPercentage;
var awayOffReboundPercentage;
var homeDefReboundPercentage;
var awayDefReboundPercentage;
var teams = new Array();
var delay = 0;
var result;
var possession;
var currentPossessingTeam;
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
var homeFouls = 0;
var awayFouls = 0;
var turnover;
var threePointShot;
var twoPointPercentage;
var threePointPercentage;
var points;
var foulPercentage;
var blocksPercentage;
var ftPercentage;
var offReboundPercentage;
var defReboundPercentage;

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
function defense(homeOffOverall, homeDefOverall, homeOffReboundRating, homeDefReboundRating, homeBlocksPercentage, awayOffOverall, awayDefOverall, awayOffReboundRating, awayDefReboundRating, awayBlocksPercentage){

	this.homeOffOverall = homeOffOverall;
	this.homeDefOverall = homeDefOverall;
	this.awayOffOverall = awayOffOverall;
	this.awayDefOverall = awayDefOverall;
	this.homeBlocksPercentage = homeBlocksPercentage/100;
	this.awayBlocksPercentage = awayBlocksPercentage/100;
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

	if(homeOffDifference >= 0 && homeOffDifference < 3){
		
	
	}

	else if(homeOffDifference )

	if (homeDefDifference > 0){
		homeDefDifference = homeDefDifference/100;
		awayTurnover = .15 + homeDefDifference;
		homeStealsPercentage = homeStealsPercentage + homeOffDifference;
		homeBlocksPercentage = homeBlocksPercentage + homeOffDifference;
		awayFoulPercentage = homeBlocksPercentage + .20 - homeDefDifference;
		awayThreePointShot = awayThreePointShot + homeDefDifference;
	}

	if(homeOffDifference <= 0 || homeDefDifference <= 0){

		awayTurnover = .15;
		homeStealsPercentage = homeStealsPercentage;
		homeBlocksPercentage = homeBlocksPercentage;
		homeThreePointShot = .66;
		homeFoulPercentage = .25;
	}

	if(awayOffDifference > 0){
		awayOffDifference = awayOffDifference/100;
		awayTurnover = .15 - awayOffDifference;
		awayStealsPercentage = awayStealsPercentage - awayOffDifference;
		homeFoulPercentage = awayBlocksPercentage + .20 + awayDefDifference;
		awayThreePointShot = awayThreePointShot - homeOffDifference; 
	}
 	if(awayDefDifference > 0){
 		awayDefDifference = awayDefDifference/100;
		homeTurnover = .15 + awayDefDifference;
		awayStealsPercentage = awayStealsPercentage + awayOffDifference;
		awayBlocksPercentage = awayBlocksPercentage + awayOffDifference;
		homeFoulPercentage = awayBlocksPercentage + .20 - awayDefDifference;
		homeThreePointShot = homeThreePointShot + awayDefDifference;
 	}

 	if(awayOffDifference <= 0 || awayDefDifference <= 0){

		homeTurnover = .15;
		awayStealsPercentage = awayStealsPercentage;
		awayBlocksPercentage = awayBlocksPercentage;
		awayThreePointShot = .66;
		awayFoulPercentage = .25;
	}

	if(homeOffReboundRating > awayDefReboundRating){
		homeOffReboundPercentage = (homeOffReboundRating + homeOffDifference)/2/100;
	}
	if(homeDefReboundRating > awayOffReboundRating){
		homeDefReboundPercentage = (homeDefReboundRating + homeOffReboundDifference)/2/100;
			
	}
	if(awayOffReboundRating > homeDefReboundRating){
		awayOffReboundPercentage = (awayOffReboundRating + awayOffDifference)/2/100;
	}
	if(awayDefReboundRating > homeOffReboundRating){
		awayOffReboundPercentage = (awayDefReboundRating + awayDefDifference)/2/100;
	}

	console.log(homeTurnover + ", " + homeThreePointShot + ", " + homeBlocksPercentage + ", " + homeOffReboundDifference + ", " + homeDefReboundDifference)
	console.log(awayTurnover + ", " + awayThreePointShot + ", " + awayBlocksPercentage + ", " + awayOffReboundDifference + ", " + awayDefReboundDifference)

	console.log(homeFoulPercentage)
	console.log(awayFoulPercentage)
}


// Gets the offensive percentages for both teams
function offensivePercentages(homeTeamTwoPoint, homeTeamThreePoint, homeTeamFT, awayTeamTwoPoint, awayTeamThreePoint, awayTeamFT){

	this.homeTeamTwoPoint = homeTeamTwoPoint;
	this.awayTeamTwoPoint = awayTeamTwoPoint;
	this.homeTeamThreePoint = homeTeamThreePoint;
	this.awayTeamThreePoint = awayTeamThreePoint;
	this.homeTeamFT = homeTeamFT;
	this.awayTeamFT = awayTeamFT;


	var num;
	var finalNum;


	homeTeamTwoPointPercentage = (homeTeamTwoPoint / 2) / 100;
	homeTeamThreePointPercentage = (homeTeamThreePoint / 2) / 100;
	awayTeamTwoPointPercentage = (awayTeamTwoPoint / 2) / 100;
	awayTeamThreePointPercentage = (awayTeamThreePoint / 2) / 100;

	homeFTRating = homeTeamFT / 100;
	awayFTRating = awayTeamFT / 100;

}

//Sets the defensive percentages for blocks and steals
function defensivePercentages(homeStealsRating, homeBlocksRating, awayStealsRating, awayBlocksRating){

	this.homeStealsRating = homeStealsRating;
	this.awayStealsRating = awayStealsRating;
	this.homeBlocksRating = homeBlocksRating;
	this.awayBlocksRating = awayBlocksRating;

	if(homeStealsRating >= 90 && homeStealsRating <= 95){
		homeStealsPercentage = .08; 	
	}

	else if(homeStealsRating >= 85 && homeStealsRating < 90){
		homeStealsPercentage = .07;
	}

	else if(homeStealsRating >= 80 && homeStealsRating < 85){
		homeStealsPercentage = .06;
	}

	else if(homeStealsRating >= 75 && homeStealsRating < 80){
		homeStealsPercentage = .05;
	}

	else{
		console.log("Home steals broke!");
	}

	if(awayStealsRating >= 90 && awayStealsRating <= 95){
		awayStealsPercentage = .08; 	
	}

	else if(awayStealsRating >= 85 && awayStealsRating < 90){
		awayStealsPercentage = .07;
	}

	else if(awayStealsRating >= 80 && awayStealsRating < 85){
		awayStealsPercentage = .06;
	}

	else if(awayStealsRating >= 75 && awayStealsRating < 80){
		awayStealsPercentage = .05;
	}

	else{
		console.log("Away steals broke!");
	}

	if(homeBlocksRating >= 90 && homeBlocksRating <= 95){
		homeBlocksPercentage = .08; 	
	}

	else if(homeBlocksRating >= 85 && homeBlocksRating < 90){
		homeBlocksPercentage = .07;
	}

	else if(homeBlocksRating >= 80 && homeBlocksRating < 85){
		homeBlocksPercentage = .06;
	}

	else if(homeBlocksRating >= 75 && homeBlocksRating < 80){
		homeBlocksPercentage = .05;
	}

	else{
		console.log("Home blocks broke!");
	}

	if(awayBlocksRating >= 90 && awayBlocksRating <= 95){
		awayBlocksPercentage = .08; 	
	}

	else if(awayBlocksRating >= 85 && awayBlocksRating < 90){
		awayBlocksPercentage = .07;
	}

	else if(awayBlocksRating >= 80 && awayBlocksRating < 85){
		awayBlocksPercentage = .06;
	}

	else if(awayBlocksRating >= 75 && awayBlocksRating < 80){
		awayBlocksPercentage = .05;
	}

	else{
		console.log("Away blocks broke!");
	}

}

//Teams
teams[0] = new Team("Minnesota");
teams[1] = new Team("Wisconsin");
teams[2] = new Team("Los Angeles");
teams[3] = new Team("New York");

// Inital possession
currentPossessingTeam = teams[2].name;
nonPossessingTeam = teams[1].name;

offensivePercentages(teams[2].twoPTRating, teams[2].threePTRating, teams[2].ftRating, teams[1].twoPTRating, teams[1].threePTRating, teams[1].ftRating);
defensivePercentages(teams[2].stealsRating, teams[2].blocksRating, teams[1].stealsRating, teams[1].blocksRating);
defense(teams[2].offOverall, teams[2].defOverall, teams[2].offReboundRating, teams[2].defReboundRating, homeBlocksPercentage, teams[1].offOverall, teams[1].defOverall, teams[1].offReboundRating, teams[1].defReboundRating, awayBlocksPercentage);

// Game starts
function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;


	TeamName(team1.name, team2.name);

	// Check to see who has possession
	function checkPossession(possession, points){

		if(possession == team1.name){

			homeTeamScore = homeTeamScore + points;
			threePointPercentage = homeTeamThreePointPercentage;
			twoPointPercentage = homeTeamTwoPointPercentage;
			turnover = homeTurnover;
			blocksPercentage = homeBlocksPercentage;
			foulPercentage = homeFoulPercentage;
			ftPercentage = homeTeamFTPercentage;
			threePointShot = homeThreePointShot;
			currentPossessingTeam = team1.name;
			nonPossessingTeam = team2.name;
		}


		if(possession == team2.name){

			awayTeamScore = awayTeamScore + points;
			threePointPercentage = awayTeamThreePointPercentage;
			twoPointPercentage = awayTeamTwoPointPercentage;
			turnover = awayTurnover;
			blocksPercentage = awayBlocksPercentage;
			foulPercentage = awayFoulPercentage;
			ftPercentage = awayTeamFTPercentage;
			threePointShot = awayThreePointShot;
			currentPossessingTeam = team2.name;
			nonPossessingTeam = team1.name;
		}
	}


	// Generate a result from the possession
	function generateResult(currentPossessingTeam, nonPossessingTeam){

		this.currentPossessingTeam = currentPossessingTeam;
		this.nonPossessingTeam = nonPossessingTeam;
		
		points = 0;

		num = Math.random();
		if(num <= turnover){
			console.log(currentPossessingTeam + " turnover")
			possession = nonPossessingTeam;
		}
		else if(num > turnover && num < threePointShot){
			console.log(currentPossessingTeam + " shoots a 2 pointer...")
			num = Math.random();
			if(num <= blocksPercentage){
				console.log(currentPossessingTeam + " blocked the shot!")
				console.log("Loose ball...")
				num = Math.random();
				if(num < .50){
					console.log(currentPossessingTeam + " has possession");
					possession = currentPossessingTeam;
				}
				else{
					console.log(nonPossessingTeam + " has possession");
					possession = nonPossessingTeam;
				}
			}
			else if(num <= foulPercentage){
				console.log(currentPossessingTeam + " foul..")
				num = Math.random();
				if(num <= .35){
					console.log(currentPossessingTeam + " shoots. Three point play!")
					points = 2;
					console.log("One foul shot for " + currentPossessingTeam)
					console.log(currentPossessingTeam + " shoots the foul shot..")
					num = Math.random();
					if(num <= ftPercentage){
						console.log(currentPossessingTeam + "  made the free throw");
						points = points + 1;
						possession = nonPossessingTeam;
					}
					else{
						console.log(currentPossessingTeam + " missed the free throw.")
						num = Math.random();
						if(num <= offReboundPercentage){
							console.log(currentPossessingTeam + " missed the free throw. " + currentPossessingTeam + " offensive rebound.")
							homeOffRebound++;
							possession = currentPossessingTeam;
						}
						else{
							console.log(currentPossessingTeam + " missed the free throw. " + nonPossessingTeam + " defensive rebound.")
							awayDefRebound++;
							possession = nonPossessingTeam;
						}
					}
				}
				else{
					console.log(currentPossessingTeam + " missed the shot. " + currentPossessingTeam + " has two free throws")
					console.log(currentPossessingTeam + " shoots the first free throw")
					num = Math.random();
					if(num <= ftPercentage){
						console.log("Free throw made")
						points = points + 1;
						num = Math.random();
						console.log(currentPossessingTeam + " shoots the second free throw..")
						if(num <= foulPercentage){
							console.log("Free throw made")
							points = points + 1;
							possession =  nonPossessingTeam;
						}
						else{
							console.log("Free throw missed")
							num = Math.random();
							if(num <= offReboundPercentage){
								console.log(currentPossessingTeam + " offensive rebound.")
								possession = currentPossessingTeam;
								points = points;
							}	
							else{
								console.log(nonPossessingTeam + " defensive rebound.")
								possession = nonPossessingTeam;
								points = points;
							}
						}
					}
					else{
						console.log("Free throw missed")
						num = Math.random();
						homeFTMissed++;
						if(num <= offReboundPercentage){
							console.log(currentPossessingTeam + " offensive rebound.")
							possession = currentPossessingTeam;
							points = points;
						}
						else{
							console.log(nonPossessingTeam + " defensive rebound.")
							possession = nonPossessingTeam;
							points = points;
						}
					}
				}
			}
			else{
				if(num <= twoPointPercentage){
				console.log(currentPossessingTeam + " scored two points!")
				points = points + 2;
				possession = nonPossessingTeam;
				}
				else{
					console.log(team1.name + " missed the shot..")
					num = Math.random();
					if(num < offReboundPercentage){
						console.log(team1.name + " offensive rebound.")
						possession = currentPossessingTeam;
						points = points;
					}
					else{
						console.log(team2.name + " defensive rebound.")
						possession = nonPossessingTeam;
						points = points;
					}
				}
			}	
		}	
		else{
			num = Math.random();
			console.log(currentPossessingTeam + " shoots a 3 pointer...")
			if(num <= blocksPercentage){
				console.log(nonPossessingTeam + " blocked the shot!")
				console.log("Loose ball...")
				num = Math.random();
				if(num < .50){
					console.log(currentPossessingTeam + " has possession");
					possession = currentPossessingTeam;
				}
				else{
					console.log(nonPossessingTeam + " has possession");
					possession = nonPossessingTeam;
				}
			}
			else if(num > blocksPercentage && num <= ftPercentage){
				console.log(nonPossessingTeam + " foul..")
				var foulShots = true;
				var foulShotsAttempted = 1;
				num = Math.random();
				if(num <= .15){
					console.log(currentPossessingTeam + " made the shot! Four point play!")
					points = 3;
					console.log(currentPossessingTeam + " shoots the free throw..")
					num = Math.random();
					if(num <= ftPercentage){
						console.log(currentPossessingTeam + " made the free throw")
						points = points + 1;
						possession = nonPossessingTeam;
					}
					else{
						console.log(team1.name + " missed the free throw")
						num = Math.random();
						if(num <= offReboundPercentage){
							console.log(currentPossessingTeam + " offensive rebound.")
							possession = currentPossessingTeam;
							points = points;
						}
						else{
							console.log(nonPossessingTeam + " defensive rebound.")
							possession = nonPossessingTeam;
							points = points;
						}
					}
				}
				while(foulShots){
					num = Math.random();
					if(num <= homeTeamFTPercentage){
						console.log("Free throw made")
						points = points + 1;
						foulShotsAttempted++;
						if(foulShotsAttempted == 3){
							num = Math.random();
							if(num <= offReboundPercentage){
								console.log(currentPossessingTeam + " missed the final free throw. " + currentPossessingTeam + " offensive rebound.");
								possession  = currentPossessingTeam;
								foulShotsAttempted == 1;
								foulShots = false;
								points = points;
							}
							else{
								console.log(currentPossessingTeam + " missed the final free throw. " + nonPossessingTeam + " defensive rebound.");
								possession = currentPossessingTeam;
								foulShotsAttempted == 1;
								foulShots = false;
								points = points;
							}
						}
						else{
							foulShots = true;
						}
					}
					else{
						console.log("free throw missed")
						foulShotsAttempted++;
						if(foulShotsAttempted == 3){
							num = Math.random();
							if(num <= offReboundPercentage){
								console.log(currentPossessingTeam + " missed the final free throw. " + currentPossessingTeam + " with the offensive rebound.");
								possession = currentPossessingTeam;
								foulShotsAttempted == 1;
								foulShots = false;
								points = points;
	
							}
							else{
								console.log(currentPossessingTeam + " missed the final free throw. " + nonPossessingTeam + " with the defensive rebound.");
								possession = nonPossessingTeam;
								foulShotsAttempted == 1;
								foulShots = false;
								points = points;
							}
						}
						else{
							foulShots = true;
						}
					}
				}
			}
			else{
				if(num <= threePointPercentage){
				console.log(currentPossessingTeam + " scored three points!")
				points = points + 3;
				possession = currentPossessingTeam;
				}
				else{
					num = Math.random();
					if(num <= offReboundPercentage){
						console.log(currentPossessingTeam + " missed the shot." + currentPossessingTeam + " rebounded the ball.")
						possession = currentPossessingTeam;
					}
					else {
						console.log(team1.name + " missed the shot." + team2.name + " rebounded the ball.")
						possession = nonPossessingTeam;
					}
				}
			}
		}	
	}
	

	//function calls
	checkPossession(possession, points);
	generateResult(currentPossessingTeam, nonPossessingTeam);
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
		var totalHomeFT = homeFTMissed + homeFTMade;
		var totalAwayFT = awayFTMissed + awayFTMade;
		var homeFinalFTPercentage = homeFTMade/totalHomeFT * 100;
		var awayFinalFTPercentage = awayFTMade/totalAwayFT * 100;

		clearInterval(delay);
		console.log("The final score is... \n" + name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore)
		console.log("Home-Stats:\n" + "2pt field goals: " + madeHome2ptShot + "/" + homeTotal2PointShots + " - " + Math.round(home2PointPercentage) + "%")
		console.log("3pt field goals: " + madeHome3ptShot + "/" + homeTotal3PointShots + " - " + Math.round(home3PointPercentage) + "%")
		console.log("Total Rebounds: " + homeTotalRebounds)
		console.log("Offensive Rebounds: " + homeOffRebound + "\n" + "Defensive Rebounds: " + homeDefRebound)
		console.log("Blocks: " + homeTotalBlocks)
		console.log("Turnovers: " + homeTurnovers)
		console.log("Fouls: " + homeFouls)
		console.log("Free Throws: " + homeFTMade + "/" + totalHomeFT + "-" + homeFinalFTPercentage + "%" )
		console.log("Away-Stats:\n" + "2pt field goals: " + madeAway2ptShot + "/" + awayTotal2PointShots + " - " + Math.round(away2PointPercentage) + "%")
		console.log("3pt field goals: " + madeAway3ptShot + "/" + awayTotal3PointShots + " - " + Math.round(away3PointPercentage) + "%")
		console.log("Total Rebounds: " + awayTotalRebounds)
		console.log("Offensive Rebounds: " + awayOffRebound + "\n" + "Defensive Rebounds: " + awayDefRebound)
		console.log("Blocks: " + awayTotalBlocks)
		console.log("Turnovers: " + awayTurnovers)
		console.log("Fouls: " + awayFouls)
		console.log("Free Throws: " + awayFTMade + "/" + totalAwayFT + "-" + awayFinalFTPercentage + "%" )
	}
}
delay = setInterval(function(){gameStart(teams[2], teams[1])}, 300);
gameStart(teams[2], teams[1])
console.log(teams[2].name + ": " + teams[2].offOverall + ", " +  teams[2].defOverall)
console.log(teams[1].name + ": " + teams[1].offOverall + ", " + teams[1].defOverall)
