var num;
var homeTeamScore = 0;
var awayTeamScore = 0;
var passesCompleted = 0;
var possession;
var checkPasses = true;
var twoPointFieldGoal = false;
var threePointFieldGoal = false;
var homeTeam = true;
var checkResult = false;
var startGame = true;
var count = 1;


while(startGame){

	while(homeTeam){

		num = Math.random();
			if(num < .10){
				result = "turnover"
				checkResult = true;
				homeTeam = false;
			}
			else if(num > .11 && num < .55){
				console.log("home team passed the ball..")
				num = Math.random();
					if(checkPasses){
						num = Math.random();
						if(num < .13){
							result = "turnover";
							homeTeam = false;
							checkResult = true;
							checkPasses = false;
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
									result = "2pt field goal";
									checkResult = true;
									homeTeam = false;
								}
								else{
									num = Math.random();
										if(num < .50){
											console.log("Home team got the rebound")
											result = "home rebound";
											checkResult = true;
											homeTeam = false;
										}
										else{
											console.log("Away team got the rebound")
											result = "away rebound";
											checkResult = true;
											homeTeam = false;
										}
								}
						}
						else if(passesTotal == 2 || passesTotal == 3){
							num = Math.random();
							if(num < .50){
								result = "2pt field goal";
								checkResult = true;
								homeTeam = false;
							}
							else{
								num = Math.random();
								if(num < .50){
									result = "home rebound";
									checkResult = true;
									homeTeam = false;
								}
								else{
									result = "away rebound";
									checkResult = true;
									homeTeam = false;
								}
							}
						}
						else if(passesTotal == 4){
							num = Math.random();
							if(num < .42){
								result = "3pt field goal";
								checkResult = true;
								homeTeam = false;
							}
							else{
								num = Math.random();
								if(num < .50){
									result = "home rebound";
									checkResult = true;
									homeTeam = false;
								}
								else{
									result = "away rebound";
									checkResult = true;
									homeTeam = false;
								}
							}
						}

					}
			}
			else if(num > .70){
				console.log("home team shoots..")
				num = Math.random();
				if(num > .65){
					num = Math.random();
					if(num < .45){
						result = "2pt field goal";
						checkResult = true;
						homeTeam = false;
					}
					else{
						num = Math.random();
						if(num < .50){
							result = "home rebound";
							checkResult = true;
							homeTeam = false;
						}
						else{
							result = "away rebound";
							checkResult = true;
							homeTeam = false;
						}
					}
				}
				else{
					num = Math.random();
					if(num < .35){
						result = "3pt field goal";
						checkResult = true;
						homeTeam = false;
					}
					else{
						num = Math.random();
						if(num < .50){
							result = "home rebound";
							checkResult = true;
							homeTeam = false;
						}
						else{
							result = "away rebound";
							checkResult = true;
							homeTeam = false;
						}
					}
				}
			}

		if(checkResult){	
			switch(result){
				case "home rebound":
					console.log("Home team rebounded the ball.")
					awayTeam = true;
					checkResult = false;
					break;
				case "away rebound":
					console.log("Home team missed the shot. Away team rebounded the ball.");
					awayTeam = true;
					checkResult = false;
					break;
				case "2pt field goal":
					console.log("Home team scored two points!")
					homeTeamScore++;
					homeTeamScore++;
					awayTeam = true;
					checkResult = false;
					break;
				case "3pt field goal":
					console.log("Home team scored three points!")
					homeTeamScore++;
					homeTeamScore++;
					homeTeamScore++;
					awayTeam = true;
					checkResult = false;
					break;
				case "turnover":
					console.log("Home team turnovered the ball. Possesssion has changed")
					awayTeam = true;
					checkResult = false;
					break;
				default:
					console.log("Nothing happened")
					checkResult = false;
			}	
		}
	}

	while(awayTeam){

		num = Math.random();
			if(num < .15){
				result = "turnover"
				awayTeam  = false;
				checkResult = true;2
			}
			else if(num > .16 && num < .65){
				console.log("away team passed the ball..")
				num = Math.random();
					if(checkPasses){
						num = Math.random();
						if(num < .15){
							result = "turnover";
							awayTeam = false;
							checkResult = true;
							checkPasses = false;
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
									result = "2pt field goal";
									checkResult = true;
									awayTeam  = false;
								}
								else{
									num = Math.random();
										if(num < .50){
											result = "away rebound";
											checkResult = true;
											awayTeam = false;
										}
										else{
											result = "home rebound";
											checkResult = true;
											awayTeam  = false;
										}
								}
						}
						else if(passesTotal == 2 || passesTotal == 3){
							num = Math.random();
							if(num < .41){
								result = "2pt field goal";
								checkResult = true;
								awayTeam  = false;
							}
							else{
								num = Math.random();
								if(num < .50){
									result = "away rebound";
									checkResult = true;
									awayTeam  = false;
								}
								else{
									result = "home rebound";
									checkResult = true;
									awayTeam  = false;
								}
							}
						}
						else if(passesTotal == 4){
							num = Math.random();
							if(num < .32){
								result = "3pt field goal";
								checkResult = true;
								awayTeam  = false;
							}
							else{
								num = Math.random();
								if(num < .50){
									result = "away rebound";
									checkResult = true;
									awayTeam  = false;
								}
								else{
									result = "home rebound";
									checkResult = true;
									awayTeam = false;
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
						result = "2pt field goal";
						checkResult = true;
						awayTeam  = false;
					}
					else{
						num = Math.random();
						if(num < .50){
							result = "away rebound";
							checkResult = true;
							awayTeam  = false;
						}
						else{
							result = "home rebound";
							checkResult = true;
							awayTeam  = false;
						}
					}
				}
				else{
					num = Math.random();
					if(num < .31){
						result = "3pt field goal";
						checkResult = true;
						awayTeam = false;
					}
					else{
						num = Math.random();
						if(num < .50){
							result = "away rebound";
							checkResult = true;
							awayTeam  = false;
						}
						else{
							result = "home rebound";
							checkResult = true;
							awayTeam  = false;
						}
					}
				}
			}

		if(checkResult){	
			switch(result){
				case "home rebound":
					console.log("Away team rebounded the ball.")
					awayTeam = true;
					checkResult = false;
					break;
				case "away rebound":
					console.log("Away team missed the shot. Home team rebounded the ball.");
					homeTeam = true;
					checkResult = false;
					break;
				case "2pt field goal":
					console.log("Away team scored two points!")
					awayTeamScore++;
					awayTeamScore++;
					homeTeam = true;
					checkResult = false;
					break;
				case "3pt field goal":
					console.log("Away team scored three points!")
					awayTeamScore++;
					awayTeamScore++;
					awayTeamScore++;
					homeTeam = true;
					checkResult = false;
					break;
				case "turnover":
					console.log("Away team turnovered the ball. Possesssion has changed")
					homeTeam = true;
					checkResult = false;
					break;
				default:
					console.log("Nothing happened")
					checkResult = false;
			
			}	
	}	}


	count++;

	if(count == 85){
		startGame = false;
		console.log("Home Team: " + homeTeamScore + " Away Team: " + awayTeamScore)
	}



}
