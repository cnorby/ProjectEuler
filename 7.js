//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

function getResult(){		
		//code goes here
		var numPrimes = 0, i=1;
		maxNum = 10001;
		while(numPrimes < maxNum){
			i++
			if(isPrime(i)){
				numPrimes++;
				if(i<100){
					console.log(i);
				}
			}
		}
		return i;
}

function isPrime(n){
	var upperLimit = Math.sqrt(n);
	for(var i=2; i<=upperLimit; i++){
		if(n%i == 0){
			return false;
		}
	}
	return true;
}

(function(getResult){
	var startTime = new Date(),
	problemNumber = 7, //problem number goes here
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
		console.log("Elapsed time: "+timeElapsed + " milliseconds");
		clearTimeout(timeout);
	}	
})(getResult)