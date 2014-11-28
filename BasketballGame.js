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
var homeTurnover = 0;
var awayTurnover = 0;

// creates a team and generates an overall
function Team(name, overall){
	this.name = name;
	var generateNum = true;
	var randNum;
	var num;
	var finalNum;

	while(generateNum){

		randNum = Math.random();
		num = randNum * 100;
		finalNum = Math.round(num);

		if(finalNum > 76 && finalNum < 97){
			overall = finalNum;
			this.overall = overall;
			generateNum = false;
		}
		else{
			generateNum = true;
		}
	}

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
					finalResult = name1 + " rebounded the ball.";
					missedShot2ptHome++;
					homeOffRebound++;
					console.log(finalResult);
					break;
				case "home 2pt field goal missed. Away defensive rebound":
					finalResult = name1 + " missed the shot." + name2 + " rebounded the ball.";
					missedShot2ptHome++;
					awayDefRebound++;
					console.log(finalResult);
					break;
				case "home 3pt field goal missed. Home offensive rebound":
					finalResult = name1 + " missed the shot." + name2 + " rebounded the ball";
					missedShot3ptHome++;
					homeOffRebound++;
					console.log(finalResult);
					break;
				case "home 3pt field goal missed. Away defensive rebound":
					finalResult = name1 + " missed the shot." + name2 + " rebound the ball.";
					missedShot3ptHome++;
					homeDefRebound++;
					console.log(finalResult);
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
					finalResult = name1 + " turnovered the ball. Possesssion has changed";
					console.log(finalResult);
					homeTurnover++;
					break;
				case "away 2pt field goal missed. Home defensive rebound":
					finalResult = name1 + " rebounded the ball.";
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
					madeHome3ptShot++;
					awayTeamScore = awayTeamScore + 3;
					console.log(finalResult)
					break;
				case "away turnover":
					finalResult = name2 + " turnovered the ball. Possesssion has changed";
					awayTurnover++;
					console.log(finalResult)
					break;
				default:
					finalResult = "Nothing happened";
					console.log(finalResult);
			}	
}


function shootingPercentage(overallOne, overallTwo){

	this.overallOne = overallOne;
	this.overallTwo = overallTwo;

		switch(overallOne){
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

		switch(overallTwo){
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
			threepointPercentage1 = .29;
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
			threepointPercentage1 = .32;
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
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .45;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 87:
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .45;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 88:
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .46;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 89:
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .47;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 90:
			threepointPercentage1 = .36;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .48;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 91:
			threepointPercentage1 = .38;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .46;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 92:
			threepointPercentage1 = .36;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .49;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 93:
			threepointPercentage1 = .40;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .49;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 94:
			threepointPercentage1 = .40;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .52;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 95:
			threepointPercentage1 = .41;
			awayTeamThreePointPercentage = threePointPercentage1;
			twoPointPercentage1 = .53;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
		}

}

//Teams
teams[0] = new Team('Minnesota', 0);
teams[1] = new Team('Iowa', 0);
teams[2] = new Team('Michigan', 0);
teams[3] = new Team('Wisconsin', 0);

// Inital possession
team = teams[0].name;

// Game starts
function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;

	shootingPercentage(team1.overall, team2.overall);
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
			if(num < .25){
				result = "home turnover";
				team = team2.name;
			}
			else if(num > .25 && num < .65){
				console.log(team1.name + " shoots..")
				num = Math.random();
				if(num < homeTeamTwoPointPercentage){
					result = "home 2pt field goal";
					team = team2.name;
				}
				else{
					num = Math.random();
					if(num < .50){
						result = "home 2pt field goal missed. Home offensive rebound";
						team = team1.name;
					}
					else{
						result = "home 2pt field goal missed. Away defensive rebound";
						team = team2.name;
					}
				}
			}
				
			else if(num > .65 && num < .99){
				num = Math.random();
				console.log(team1.name + " shoots...")
				if(num < homeTeamThreePointPercentage){
					result = "home 3pt field goal";
					team = team2.name;
				}
				else{
					num = Math.random();
					if(num < .50){
						result = "home 3pt field goal missed. Home offensive rebound";
						team = team1.name;
					}
					else{
						result = "home 3pt field goal missed. Away defensive rebound";
						team = team2.name;;
					}
				}
			}
		}
		
		// Away Team's possession
		if(possession == team2.name){
			// Away Team
			num = Math.random();
			if(num < .15){
				result = "away turnover";
				team = team1.name;
			}
			
			else if(num > .25 && num < .65){
				console.log(team2.name + " shoots...")
				num = Math.random();
				if(num < awayTeamTwoPointPercentage){
					result = "away 2pt field goal";
					team = team1.name;
				}
				else{
					num = Math.random();
					if(num < .50){
						result = "away 2pt field goal missed. Away offensive rebound";
						team = team2.name;
					}
					else{
						result = "away 2pt field goal missed. Home defensive rebound";
						team = team1.name;
					}
				}
			}
				
			else if(num > .65 && num < .99){
				num = Math.random();
				console.log(team2.name + " shoots...")
				if(num < awayTeamThreePointPercentage){
					result = "away 3pt field goal";
					team = team1.name;
				}
				else{
					num = Math.random();
					if(num < .50){
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
		var home2PointPercentage = missedShot2ptHome/homeTotal2PointShots * 100;
		var home3PointPercentage = missedShot3ptHome/homeTotal3PointShots * 100;
		var away2PointPercentage = missedShot2ptAway/awayTotal2PointShots * 100;
		var away3PointPercentage = missedShot3ptAway/awayTotal3PointShots * 100;
		var homeTotalRebounds = homeOffRebound + homeDefRebound;
		var awayTotalRebounds = awayOffRebound + awayDefRebound;

		clearInterval(delay);
		console.log("The final score is... \n" + name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore)
		console.log("Home-Stats:\n" + "2pt field goals: " + madeHome2ptShot + "/" + homeTotal2PointShots + " - " + Math.round(home2PointPercentage) + "%")
		console.log("3pt field goals: " + madeHome3ptShot + "/" + homeTotal3PointShots + " - " + Math.round(home3PointPercentage) + "%")
		console.log("Total Rebounds: " + homeTotalRebounds)
		console.log("Offensive Rebounds: " + homeOffRebound + "\n" + "Defensive Rebounds: " + homeDefRebound)
		console.log("Turnovers: " + homeTurnover)
		console.log("Away-Stats:\n" + "2pt field goals: " + madeAway2ptShot + "/" + awayTotal2PointShots + " - " + Math.round(away2PointPercentage) + "%")
		console.log("3pt field goals: " + madeAway3ptShot + "/" + awayTotal3PointShots + " - " + Math.round(away3PointPercentage) + "%")
		console.log("Total Rebounds: " + awayTotalRebounds)
		console.log("Offensive Rebounds: " + awayOffRebound + "\n" + "Defensive Rebounds: " + awayDefRebound)
		console.log("Turnovers: " + awayTurnover)
	}
}

delay = setInterval(function(){gameStart(teams[0], teams[2])}, 5000);
console.log(teams[0].overall + ", " + teams[2].overall)
