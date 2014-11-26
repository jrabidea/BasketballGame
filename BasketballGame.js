var num;
var homeTeamScore = 0;
var awayTeamScore = 0;
var passesCompleted = 0;
var checkPasses = true;
var homeTeam = false;
var awayTeam = false;
var checkResult = false;
var startGame = true;
var count = 1;
var intialPosition = true;
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
					finalResult = name2 + "scored two points!";
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
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .43;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 84:
			threePointPercentage1 = .33;
			awayTeamThreePointPercentage  = threepointPercentage1;
			twoPointPercentage1 = .44;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 85:
			threePointPercentage1 = .34;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .44;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 86:
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .45;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 87:
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .45;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 88:
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .46;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 89:
			threepointPercentage1 = .35;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .47;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 90:
			threepointPercentage1 = .36;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .48;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 91:
			threepointPercentage1 = .38;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .46;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 92:
			threepointPercentage1 = .36;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .49;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 93:
			threepointPercentage1 = .40;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .49;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 94:
			threepointPercentage1 = .40;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .52;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
			case 95:
			threepointPercentage1 = .41;
			awayTeamThreePointPercentage = threepointPercentage1;
			twoPointPercentage1 = .53;
			awayTeamTwoPointPercentage = twoPointPercentage1;
			break;
		}

	}

teams[0] = new Team('Minnesota', 0);
teams[1] = new Team('Iowa', 0);
teams[2] = new Team('Michigan', 0);
teams[3] = new Team('Wisconsin', 0);


function gameStart(team1, team2){

	this.team1 = team1;
	this.team2 = team2;

	shootingPercentage(this.team1.overall, this.team2.overall);
	TeamName(this.team1.name, this.team2.name);

	while(startGame){

			while(intialPosition){
				num = Math.random();
				if(num < 50){
					homeTeam = true;
					intialPosition = false;
				}
				else{
					awayTeam = true;
					intialPosition = false;
				}
			}

			while(homeTeam){
				// Home Team
				num = Math.random();
					if(num < .10){
						getResult("home turnover");
						homeTeam = false;
						awayTeam = true;
					}
					else if(num > .11 && num < .55){
						console.log("home team passed the ball..")
						num = Math.random();
							if(checkPasses){
								num = Math.random();
								if(num < .13){
									getResult("home turnover");
									homeTeam = false;
									awayTeam = true;
								}
								else if(num > .14 && num < .63){
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
									num = Math.random();
										if(num < homeTeamTwoPointPercentage){
											getResult("home 2pt field goal");
											homeTeam = false;
											awayTeam = true;
										}
										else{
											num = Math.random();
												if(num < .50){
													getResult("home offensive rebound");
													homeTeam = false;
													awayTeam = true;
												}
												else{
													getResult("away defensive rebound");
													homeTeam = false;
													awayTeam = true;
												}
										}
								}
								else if(passesTotal == 2 || passesTotal == 3){
									num = Math.random();
									if(num < homeTeamTwoPointPercentage){
										getResult("home 2pt field goal");
										homeTeam = false;
										awayTeam = true;
									}
									else{
										num = Math.random();
										if(num < .50){
											getResult("home offensive rebound");
											homeTeam = false;
											awayTeam = true;
										}
										else{
											getResult("away defensive rebound");
											homeTeam = false;
											awayTeam = true;
										}
									}
								}
								else if(passesTotal == 4){
									num = Math.random();
									if(num < homeTeamThreePointPercentage){
										getResult("home 3pt field goal");
										homeTeam = false;
										awayTeam = true;
									}
									else{
										num = Math.random();
										if(num < .50){
											getResult("home offensive rebound");
											homeTeam = false;
											awayTeam = true;
										}
										else{
											getResult("away defensive rebound");
											homeTeam = false;
											awayTeam = true;
										}
									}
								}

							}
					}
					else if(num > .56){
						console.log("home team shoots..")
						num = Math.random();
						if(num > .65){
							num = Math.random();
							if(num < homeTeamTwoPointPercentage){
								getResult("home 2pt field goal");
								homeTeam = false;
								awayTeam = true;
							}
							else{
								num = Math.random();
								if(num < .50){
									getResult("home offensive rebound");
									homeTeam = false;
									awayTeam = true;
								}
								else{
									getResult("away defensive rebound");
									homeTeam = false;
									awayTeam = true;
								}
							}
						}
						else{
							num = Math.random();
							if(num < homeTeamThreePointPercentage){
								getResult("home 3pt field goal");
								homeTeam = false;
								awayTeam = true;
							}
							else{
								num = Math.random();
								if(num < .50){
									getResult("home offensive rebound");
									homeTeam = false;
									awayTeam = true;
								}
								else{
									getResult("away defensive rebound");
									homeTeam = false;
									awayTeam = true;
								}
							}
						}
					}
			}

			while(awayTeam){
				// Away Team
				num = Math.random();
						if(num < .15){
							getResult("away turnover");
							awayTeam = false;
							homeTeam = true;
						}
						else if(num > .16 && num < .65){
							console.log("away team passed the ball..")
							num = Math.random();
								if(checkPasses){
									num = Math.random();
									if(num < .15){
										getResult("turnover");
										awayTeam = false;
										homeTeam = true;
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
										num = Math.random();
											if(num < awayTeamTwoPointPercentage){
												getResult("away 2pt field goal");
												awayTeam = false;
												homeTeam = true;
											}
											else{
												num = Math.random();
													if(num < .50){
														getResult("away offensive rebound");
														awayTeam = false;
														homeTeam = true;
													}
													else{
														getResult("home defensive rebound");
														awayTeam = false;
														homeTeam = true;
													}
											}
									}
									else if(passesTotal == 2 || passesTotal == 3){
										num = Math.random();
										if(num < awayTeamTwoPointPercentage){
											getResult("away 2pt field goal");
											awayTeam = false;
											homeTeam = true;
										}
										else{
											num = Math.random();
											if(num < .50){
												getResult("away offensive rebound");
												awayTeam = false;
												homeTeam = true;
											}
											else{
												getResult("home defensive rebound");
												awayTeam = false;
												homeTeam = true;
											}
										}
									}
									else if(passesTotal == 4){
										num = Math.random();
										if(num < awayTeamThreePointPercentage){
											getResult("away 3pt field goal");
											awayTeam = false;
											homeTeam = true;
										}
										else{
											num = Math.random();
											if(num < .50){
												getResult("away offensive rebound");
												awayTeam = false;
												homeTeam = true;
											}
											else{
												getResult("home defensive rebound");
												awayTeam = false;
												homeTeam = true;
											}
										}
									}

								}
						}
						else if(num > .66){
							console.log("away team shoots..")
							num = Math.random();
							if(num > .65){
								num = Math.random();
								if(num < awayTeamTwoPointPercentage){
									getResult("away 2pt field goal");
									awayTeam = false;
									homeTeam = true;
								}
								else{
									num = Math.random();
									if(num < .50){
										getResult("away offensvie rebound");
										awayTeam = false;
										homeTeam = true;
									}
									else{
										getResult("home defensive rebound");
										awayTeam = false;
										homeTeam = true;
									}
								}
							}
							else{
								num = Math.random();
								if(num < awayTeamThreePointPercentage){
									getResult("away 3pt field goal");
									awayTeam = false;
									homeTeam = true;
								}
								else{
									num = Math.random();
									if(num < .50){
										getResult("away offensive rebound");
										awayTeam  = false;
										homeTeam = true;
									
									}
									else{
										getResult("home defensive rebound");
										awayTeam  = false;
										homeTeam = true;
										
									}
								}
							}
						}
			}

			count++;

			if(count == 100){

				startGame = false;

				console.log(name1 + ":" + homeTeamScore + " " + name2+ ":" + awayTeamScore);
			}
	}
}

gameStart(teams[3], teams[1]);
