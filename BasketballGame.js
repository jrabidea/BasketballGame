var num;
var homeTeamScore = 0;
var awayTeamScore = 0;
var passesCompleted = 0;
var possession;
var checkPasses = true;
var twoPointFieldGoal = false;
var threePointFieldGoal = false;

function homeTeamPossession(){
		while(homeTeam){
			num = Math.random();
				if(num < .10){
					result = "turnover"
					homeTeam = false;
				}
				else if(num > .11 && num < .65){
					console.log("home team passed the ball..")
					num = Math.random();
						if(checkPasses){
							num = Math.random();
							if(num < .15){
								result = "turnover";
								homeTeam = false;
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
									if(num < .68){
										result = "2pt field goal";
										homeTeam = false;
									}
									else{
										num = Math.random();
											if(num < .50){
												console.log("Home team got the rebound")
												result = "home rebound";
												checkPasses = 1;
												homeTeam = false;
											}
											else{
												console.log("Away team got the rebound")
												result = "away rebound";
												homeTeam = false;
											}
									}
							}
							else if(passesTotal == 2 || passesTotal == 3){
								num = Math.random();
								if(num < .45){
									result = "2pt field goal";
									homeTeam = false;
								}
								else{
									num = Math.random();
									if(num < .50){
										result = "home rebound";
										homeTeam = false;
									}
									else{
										result = "away rebound";
										homeTeam = false;
									}
								}
							}
							else if(passesTotal == 4){
								num = Math.random();
								if(num < .39){
									result = "3pt field goal";
									homeTeam = false;
								}
								else{
									num = Math.random();
									if(num < .50){
										result = "home rebound";
										homeTeam = false;
									}
									else{
										result = "away rebound";
										homeTeam = false;
									}
								}
							}

						}
				}
				else if(num > .66){
					console.log("home team shoots..")
					num = Math.random();
					if(num > .65){
						num = Math.random();
						if(num < .45){
							result = "2pt field goal";
							homeTeam = false;
						}
						else{
							num = Math.random();
							if(num < .50){
								result = "home rebound";
								homeTeam = false;
							}
							else{
								result = "away rebound";
								homeTeam = false;
							}
						}
					}
					else{
						num = Math.random();
						if(num < .35){
							result = "3pt field goal";
							homeTeam = false;
						}
						else{
							num = Math.random();
							if(num < .50){
								result = "home rebound";
								homeTeam = false;
							}
							else{
								result = "away rebound";
								homeTeam = false;
							}
						}
					}
				}


			switch(result){
				case "home rebound":
					console.log("Home team rebounded the ball.")
					homeTeam = true;
					break;
				case "away rebound":
					console.log("Away team rebounded the ball. Possession change")
					awayPossession = true;
					break;
				case "2pt field goal":
					console.log("Home team scored two points!")
					twoPointFieldGoal = true;
					break;
				case "3pt field goal":
					console.log("Home team scored three points!")
					threePointFieldGoal = true;
					break;
				case "turnover":
					console.log("Home teamed turnover. Possesssion has changed")
					awayPossession = true;
				default:
					console.log("Nothing happened")
			}	

		}

}
