function getResult(){		
		//code goes here
}


(function(getResult){
	var startTime = new Date(),
	problemNumber, //problem number goes here
	result, timeoutWasHit = false;
	
	setTimeout(function (){
		console.log("60 seconds elapsed!");
		timeoutWasHit = true;
	}, 60*1000);
	
	result = getResult();
	
	var endTime = new Date();	
	var timeElapsed = endTime - startTime;
	
	
	if(!timeoutWasHit){
		console.log("The result for Project Euler problem number "+problemNumber+" is "+ result);
		console.log("Elapsed time: "+timeElapsed);
	}	
})(getResult)