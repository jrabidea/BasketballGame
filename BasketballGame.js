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
var homeFouls = 0;
var awayFouls = 0;

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

	if(homeOffDifference > 0){
		homeOffDifference = homeOffDifference/100;
		homeTurnover = .15 - homeOffDifference;
		homeStealsPercentage = homeStealsPercentage - homeOffDifference;
		homeBlocksPercentage = homeBlocksPercentage - homeOffDifference;
		homeThreePointShot = homeThreePointShot - homeOffDifference; 
	}

	if (homeDefDifference > 0){
		homeDefDifference = homeDefDifference/100;
		awayTurnover = .15 + homeDefDifference;
		homeStealsPercentage = homeStealsPercentage + homeOffDifference;
		homeBlocksPercentage = homeBlocksPercentage + homeOffDifference;
		awayFoulPercentage = .15 - homeDefDifference;
		awayThreePointShot = awayThreePointShot + homeDefDifference;
	}

	if(awayOffDifference > 0){
		awayOffDifference = awayOffDifference/100;
		awayTurnover = .15 - awayOffDifference;
		awayStealsPercentage = awayStealsPercentage - awayOffDifference;
		awayBlocksPercentage = awayBlocksPercentage - awayOffDifference;
		awayThreePointShot = awayThreePointShot - homeOffDifference; 
	}
 	if(awayDefDifference > 0){
 		awayDefDifference = awayDefDifference/100;
		homeTurnover = .15 + awayDefDifference;
		awayStealsPercentage = awayStealsPercentage + awayOffDifference;
		awayBlocksPercentage = awayBlocksPercentage + awayOffDifference;
		homeFoulPercentage = .15 - awayDefDifference;
		homeThreePointShot = homeThreePointShot + awayDefDifference;
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

	console.log(homeThreePointShot + ", " + awayThreePointShot)
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
team = teams[2].name;

defense(teams[2].offOverall, teams[2].defOverall, teams[2].offReboundRating, teams[2].defReboundRating,  teams[1].offOverall, teams[1].defOverall, teams[1].offReboundRating, teams[1].defReboundRating);
offensivePercentages(teams[2].twoPTRating, teams[2].threePTRating, teams[2].ftRating, teams[1].twoPTRating, teams[1].threePTRating, teams[1].ftRating);
defensivePercentages(teams[2].stealsRating, teams[2].blocksRating, teams[1].stealsRating, teams[1].blocksRating);

// Game starts
function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;


	TeamName(team1.name, team2.name);

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
			console.log(num)
			if(num <= homeTurnover){
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
					awayTotalBlocks++;
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
					awayFouls++;
					if(num <= .35){
						console.log(team1.name + " shoots. Three point play!")
						homeTeamScore = homeTeamScore + 2;
						console.log("One foul shot for " + name1)
						console.log(team1.name + " shoots the foul shot..")
						num = Math.random();
						madeHome2ptShot++;
						if(num <= homeTeamFTPercentage){
							console.log(team1.name + "  made the free throw");
							homeTeamScore++;
							team = team2.name;
							homeFTMade++;
						}
						else{
							console.log(team1.name + " missed the free throw.")
							homeFTMissed++;
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
							homeFTMade++;
							console.log(team1.name + " shoots the second free throw..")
							if(num <= homeTeamFTPercentage){
								console.log("Free throw made")
								homeTeamScore++;
								team = team2.name;
								homeFTMade++;
							}
							else{
								console.log("Free throw missed")
								num = Math.random();
								homeFTMissed++;
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
							homeFTMissed++;
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
					team = team2.name;
					}
					else{
						console.log(team1.name + " missed the shot..")
						num = Math.random();
						missedShot2ptHome++;
						if(num < homeOffReboundPercentage){
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
				num = Math.random();
				console.log(team1.name + " shoots a 3 pointer...")
				if(num <= awayBlocksPercentage){
					console.log(team2.name + " blocked the shot!")
					console.log("Loose ball...")
					awayTotalBlocks++;
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
									homeOffRebound++;
									homeFTMissed++;
								}
								else{
									console.log(team1.name + " missed the final free throw. " + team2.name + " defensive rebound.");
									team = team2.name;
									homeFTMissed++;
									foulShotsAttempted == 1;
									homeFoulShots = false;
									awayDefRebound++;
								}
							}
							else{
								homeFoulShots = true;
							}
						}
						else{
							console.log("free throw missed")
							foulShotsAttempted++;
							homeFTMissed++;
							if(foulShotsAttempted == 3){
								num = Math.random();
								if(num <= homeOffRebound){
									console.log(team1.name + " missed the final free throw. " + team1.name + " with the offensive rebound.");
									team = team1.name;
									foulShotsAttempted == 1;
									homeFoulShots = false;
									homeOffRebound++;
								}
								else{
									console.log(team1.name + " missed the final free throw. " + team2.name + " with the defensive rebound.");
									team = team2.name;
									foulShotsAttempted == 1;
									homeFoulShots = false;
									awayDefRebound++;
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
			console.log(num)
			if(num < awayTurnover){
				console.log(team2.name + " turnover")
				awayTurnovers++;
				team = team1.name;
			}
			else if(num > awayTurnover && num < awayThreePointShot){
				console.log(team2.name + " shoots a 2 pointer...")
				num = Math.random();
				if(num <= homeBlocksPercentage){
					console.log(team2.name + " blocked the shot!")
					console.log("Loose ball...")
					homeTotalBlocks++;
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
					homeFouls++;
					num = Math.random();
					if(num <= .35){
						console.log(team2.name + " shoots. Three point play!")
						awayTeamScore = awayTeamScore + 2;
						madeAway2ptShot++;
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
								homeDefRebound++;
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
									homeDefRebound++;
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
								team = team1.name;
								homeDefRebound++;
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
					team = team1.name;
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
							console.log(team1.name + " defensive rebound.")
							team = team1.name;
							homeDefRebound++;
						}
					}
				}	
			}	
			else{
				num = Math.random();
				console.log(team2.name + " shoots a 3 pointer...")
				if(num <= awayBlocksPercentage){
					console.log(team2.name + " blocked the shot!")
					console.log("Loose ball...")
					homeTotalBlocks++;
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
					awayFouls++;
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
								homeDefRebound++;
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
									awayOffRebound++;
								}
								else{
									console.log(team2.name + " missed the final free throw. " + team1.name + " defensive rebound.");
									team = team1.name;
									awayFTMissed++;
									foulShotsAttempted == 1;
									awayFoulShots = false;
									homeDefRebound++;
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
									awayOffRebound++;
								}
								else{
									console.log(team2.name + " missed the final free throw. " + team1.name + " with the defensive rebound.");
									team = team1.name;
									foulShotsAttempted == 1;
									awayFoulShots = false;
									homeDefRebound++;
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
					madeAway3ptShot++;
					awayTeamScore = awayTeamScore + 3;
					team = team1.name;
					}
					else{
						num = Math.random();
						if(num <= awayOffReboundPercentage){
							console.log(team2.name + " missed the shot." + team2.name + " rebounded the ball.")
							missedShot3ptAway++;
							awayOffRebound++;
							team = team2.name
						}
						else {
							console.log(team2.name + " missed the shot." + team1.name + " rebounded the ball.")
							missedShot3ptAway++;
							homeDefRebound++;
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
delay = setInterval(function(){gameStart(teams[2], teams[1])}, 100);
console.log(teams[2].name + ": " + teams[2].offOverall + ", " +  teams[2].defOverall)
console.log(teams[1].name + ": " + teams[1].offOverall + ", " + teams[1].defOverall)
