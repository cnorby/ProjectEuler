//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function getResult(){		
		var num = 600851475143, smallestPrimeFactor = 1;
		
		while (smallestPrimeFactor != null){
			console.log("num: "+num+", SPF:"+ smallestPrimeFactor);
			num = num / smallestPrimeFactor; //the first time through, this won't do anything
			smallestPrimeFactor = getSmallestPrimeFactor(num);			
		}
		return num;
}

function getSmallestPrimeFactor(num){
	var i, len = Math.sqrt(num);
	
	for(i=2; i<len; i++){
		if(num%i === 0){
			return i;
		}
	}
	return null; //there wasn't a prime factor; num must've been prime itself
}


(function(getResult){
	var startTime = new Date(),
	problemNumber = 3,
	result, timeoutWasHit = false;
	
	var timeout = setTimeout(function (){
		console.log("60 seconds elapsed!");
		timeoutWasHit = true;
	}, 60*1000);
	
	result = getResult();
	
	var endTime = new Date();	
	var timeElapsed = endTime - startTime;
	
	
	if(!timeoutWasHit){
		console.log("The result for Project Euler problem number "+problemNumber+" is "+ result);
		console.log("Elapsed time: "+timeElapsed);
		clearTimeout(timeout);
	}	
})(getResult)