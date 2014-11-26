var num;
var homeTeamScore = 0;
var awayTeamScore = 0;
var passesCompleted = 0;
var checkPasses = true;
var team;
var checkResult = false;
var startGame = true;
var count = 1;
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
var delay;
var result;
var possession;
var currentPossession;

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

		if(finalNum > 76){
			overall = finalNum;
			this.overall = overall;
			generateNum = false;
		}
		else{
			generateNum = true;
		}
	}

}

function TeamName(name1, name2){
	this.name1 = name1;
	this.name2 = name2;
}

function getResult(result){

			this.result = result;
			var finalResult;

			switch(result){
				case "home offensive rebound":
					finalResult = name1 + " rebounded the ball.";
					console.log(finalResult);
					break;
				case "away defensive rebound":
					finalResult = name1 + " missed the shot." + name2 + " rebounded the ball.";
					console.log(finalResult);
					break;
				case "home 2pt field goal":
					finalResult = name1 + " scored two points!";
					console.log(finalResult);
					homeTeamScore = homeTeamScore + 2;
					break;
				case "home 3pt field goal":
					finalResult = name1 + " scored three points!";
					console.log(finalResult);
					homeTeamScore = homeTeamScore + 3;
					break;
				case "home turnover":
					finalResult = name1 + " turnovered the ball. Possesssion has changed";
					console.log(finalResult);
					break;
				case "home defensive rebound":
					finalResult = name2 + " rebounded the ball.";
					console.log(finalResult);
					break;
				case "away offensive rebound":
					finalResult = name2 + " missed the shot." + name1 + " rebounded the ball.";
					console.log(finalResult);
					homeTeam = true;
					break;
				case "away 2pt field goal":
					finalResult = name2 + " scored two points!";
					console.log(finalResult);
					awayTeamScore = awayTeamScore + 2;
					break;
				case "away 3pt field goal":
					finalResult = name2 + " scored three points!";
					awayTeamScore = awayTeamScore + 3;
					break;
				case "away turnover":
					finalResult = name2 + " turnovered the ball. Possesssion has changed";
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
			awayTeamThreePointPercentage = ThreePointPercentage1;
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

teams[0] = new Team('Minnesota', 0);
teams[1] = new Team('Iowa', 0);
teams[2] = new Team('Michigan', 0);
teams[3] = new Team('Wisconsin', 0);


team = teams[0].name;

function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;

	shootingPercentage(team1.overall, team2.overall);
	TeamName(team1.name, team2.name);
	function currentPossession(team){
		this.team = team;

		if(team == team2.name){

			currentPossession = team2.name;
		}

		if(team === team1.name){
			currentPossession = team1.name;
		}
	}


	function generateResult(possession){

		this.possession = possession;

		if(possession == team1.name){
			// Home Team
			num = Math.random();
				if(num < .10){
					result = "home turnover";
					team = team2.name;
					}
				else if(num > .11 && num < .55){
					console.log(team1.name + " passed the ball..")
					num = Math.random();
						if(checkPasses){
							num = Math.random();
							if(num < .13){
								result = "home turnover";
								team = team2.name;
							}
							else if(num > .14 && num < .63){
								console.log("pass was completed")
								passesCompleted++;
									if(passesCompleted == 4){
										passesTotal = passesCompleted;
										checkPasses = false;
									}
							}
							else{
								passesTotal = passesCompleted;
								checkPasses = false;
							}
						}
						else{
							if(passesTotal == 1){
								num = Math.random();
								console.log(team1.name + " shoots...")
									if(num < homeTeamTwoPointPercentage){
										result = "home 2pt field goal";
										team = team2.name;
									}
									else{
										num = Math.random();
											if(num < .50){
												result = "home offensive rebound";
												team = team1.name;
											}
											else{
												result = "away defensive rebound";
												team = team2.name;
											}
									}
							}
							else if(passesTotal == 2 || passesTotal == 3){
								num = Math.random();
								console.log(team1.name + " shoots...")
								if(num < homeTeamTwoPointPercentage){
									result = "home 2pt field goal";
									team = team2.name;
								}
								else{
									num = Math.random();
									if(num < .50){
										result = "home offensive rebound";
										team = team1.name;
									}
									else{
										result = "away defensive rebound";
										team = team2.name;
									}
								}
							}
							else if(passesTotal == 4){
								num = Math.random();
								console.log(team1.name + " shoots...")
								if(num < homeTeamThreePointPercentage){
									result = "home 3pt field goal";
									team = team2.name;
								}
								else{
									num = Math.random();
									if(num < .50){
										result = "home offensive rebound";
										team = team1.name;
									}
									else{
										result = "away defensive rebound";
										team = team2.name;
									}
								}
							}

						}
				}
				else if(num > .56){
					console.log(team1.name + " shoots...")
					num = Math.random();
					if(num > .65){
						num = Math.random();
						if(num < homeTeamTwoPointPercentage){
							result = "home 2pt field goal";
							team = team2.name;
						}
						else{
							num = Math.random();
							if(num < .50){
								result = "home offensive rebound";
								team = team1.name;
							}
							else{
								result = "away defensive rebound";
								team = team2.name;
							}
						}
					}
					else{
						num = Math.random();
						console.log(team1.name + " shoots...")
						if(num < homeTeamThreePointPercentage){
							result = "home 3pt field goal";
							team = team2.name;
						}
						else{
							num = Math.random();
							if(num < .50){
								result = "home offensive rebound";
								team = team1.name;
							}
							else{
								result = "away defensive rebound";
								team = team2.name;;
							}
						}
					}
				}
		}

		if(possession == team2.name){
			// Away Team
			num = Math.random();
			if(num < .15){
				result = "away turnover";
				team = team1.name;
			}
			else if(num > .16 && num < .65){
				console.log(team2.name + " passed the ball..")
				num = Math.random();
					if(checkPasses){
						num = Math.random();
						if(num < .15){
							result = "away turnover";
							team = team1.name;
						}
						else if(num > .16 && num < .70){
							console.log("pass was completed");
							passesCompleted++;
								if(passesCompleted == 4){
									passesTotal = passesCompleted;
									checkPasses = false;
								}
						}
						else{
							passesTotal = passesCompleted;
							checkPasses = false;
						}
					}
					else{
						if(passesTotal == 1){
							console.log(team2.name + " shoots...")
							num = Math.random();
								if(num < awayTeamTwoPointPercentage){
									result = "away 2pt field goal";
									team = team1.name;
								}
								else{
									num = Math.random();
										if(num < .50){
											result = "away offensive rebound";
											team = team2.name;
										}
										else{
											result = "home defensive rebound";
											team = team1.name;
										}
								}
						}
						else if(passesTotal == 2 || passesTotal == 3){
							num = Math.random();
							console.log(team2.name + " shoots...")
							if(num < awayTeamTwoPointPercentage){
								result = "away 2pt field goal";
								team = team1.name;
							}
							else{
								num = Math.random();
								if(num < .50){
									result = "away offensive rebound";
									team = team2.name;
								}
								else{
									result = "home defensive rebound";
									team = team1.name;
								}
							}
						}
						else if(passesTotal == 4){
							num = Math.random();
							console.log(team2.name + " shoots...")
							if(num < awayTeamThreePointPercentage){
								result = "away 3pt field goal";
								team = team1.name;
							}
							else{
								num = Math.random();
								if(num < .50){
									result = "away offensive rebound";
									team = team2.name;
								}
								else{
									result = "home defensive rebound";
									team = team1.name;
								}
							}
						}

					}
			}
			else if(num > .66){
				console.log(team2.name + " shoots...")
				num = Math.random();
				if(num > .65){
					num = Math.random();
					if(num < awayTeamTwoPointPercentage){
						result = "away 2pt field goal";
						team = team1.name;
					}
					else{
						num = Math.random();
						if(num < .50){
							result = "away offensive rebound";
							team = team2.name;
						}
						else{
							result = "home defensive rebound";
							team = team1.name;
						}
					}
				}
				else{
					num = Math.random();
					console.log(team2.name + " shoots...")
					if(num < awayTeamThreePointPercentage){
						result = "away 3pt field goal";
						team = team1.name;
					}
					else{
						num = Math.random();
						if(num < .50){
							result = "away offensive rebound";
							team = team2.name;
						
						}
						else{
							result = "home defensive rebound";
							team = team1.name;
							
						}
					}
				}
			}
		}
	}

	currentPossession(team);
	generateResult(currentPossession);
	getResult(result);	
	console.log(name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore)
}

delay = setInterval(function(){gameStart(teams[0], teams[2])}, 5000);
console.log(teams[0].overall + ", " + teams[2].overall)
