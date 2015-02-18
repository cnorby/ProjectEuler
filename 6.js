// The sum of the squares of the first ten natural numbers is
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


function getResult(){
		//brute force. no shame.
		var squareOfSum = getSquareOfSum(100);
		var sumOfSquares = getSumOfSquares(100);
		
		return squareOfSum - sumOfSquares;
}

function getSquareOfSum(num){
	var sum = (num * (num + 1)) /2;
	
	return Math.pow(sum, 2);
}

function getSumOfSquares(num){
	var sum = 0, i;
	for(i=1; i<=100; i++){
		sum+=(i*i);
	}
	return sum;
}


(function(getResult){
	var startTime = new Date(),
	problemNumber = 6, //problem number goes here
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