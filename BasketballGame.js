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


var getResult = function(result){

	var resultCheck = result;
	var finalResult;

	switch(resultCheck){
		case "home offensive rebound":
			finalResult = "Home team rebounded the ball.";
			console.log(finalResult);
			break;
		case "away defensive rebound":
			finalResult = "Home team missed the shot. Away team rebounded the ball.";
			console.log(finalResult);
			break;
		case "home 2pt field goal":
			finalResult = "Home team scored two points!";
			console.log(finalResult);
			homeTeamScore = homeTeamScore + 2;
			break;
		case "home 3pt field goal":
			finalResult = "Home team scored three points!";
			console.log(finalResult);
			homeTeamScore = homeTeamScore + 3;
			break;
		case "home turnover":
			finalResult = "Home team turnovered the ball. Possesssion has changed";
			console.log(finalResult);
			break;
		case "home defensive rebound":
			finalResult = "Away team rebounded the ball.";
			console.log(finalResult);
			break;
		case "away offensive rebound":
			finalResult = "Away team missed the shot. Home team rebounded the ball.";
			console.log(finalResult);
			homeTeam = true;
			break;
		case "away 2pt field goal":
			finalResult = "Away team scored two points!";
			console.log(finalResult);
			awayTeamScore = awayTeamScore + 2;
			break;
		case "away 3pt field goal":
			finalResult = "Away team scored three points!";
			awayTeamScore = awayTeamScore + 3;
			break;
		case "away turnover":
			finalResult = "Away team turnovered the ball. Possesssion has changed";
			break;
		default:
			finalResult = "Nothing happened";
			console.log(finalResult);
	}	
}

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
								if(num < .70){
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
							if(num < .50){
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
							if(num < .42){
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
					if(num < .45){
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
					if(num < .35){
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
									if(num < .60){
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
								if(num < .41){
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
								if(num < .32){
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
						if(num < .42){
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
						if(num < .31){
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

		console.log("Home:" + homeTeamScore + " " + "Away:" + awayTeamScore);
	}
}
