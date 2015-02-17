// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function getResult(){
	return lcmLessThan(20)
}

function lcmLessThan(num){
	if(num === 2){
		return 2;
	}else{
		return lcm(num, lcmLessThan(num-1));
	}
}

function lcm(a, b) { 
	return ( a / gcf(a,b) ) * b; 
}

function gcf(a, b) { 
	return ( b == 0 ) ? (a):( gcf(b, a % b) ); 
}

(function(getResult){
	var startTime = new Date(),
	problemNumber = 5, //problem number goes here
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