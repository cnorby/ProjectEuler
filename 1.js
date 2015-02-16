//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

function getResult(){		
		var i, sum = 0;
		
		for(i=0; i<1000; i++){
			if(i%3 === 0 || i%5 === 0){
				sum += i;
			}
		}
		return sum;
}


(function(getResult){
	var startTime = new Date(),
	problemNumber = 1, 
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