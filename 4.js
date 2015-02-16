// A palindromic number reads the same both ways. the largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// find the largest palindrome made from the product of two 3-digit numbers.

function getResult(){		
	var maxValue = 999, numX = maxValue, numY = maxValue, previousPivotPoint = {x: maxValue, y: maxValue}, nextPivotPoint;
	
	while(numX > 0){
		if(isPalindromic(numX*numY)){
			return numX*numY;
		}
		//else
		if(numX === maxValue){ //go to the next pivot point
			nextPivotPoint = getNextPivotPoint(previousPivotPoint);
			numX = nextPivotPoint.x;
			numY = nextPivotPoint.y;
			previousPivotPoint = nextPivotPoint;
		}else{
			numX = numX+1;
			numY = numY-1;
		}
	}
}

function getNextPivotPoint(previousPivotPoint){
	if(previousPivotPoint.x === previousPivotPoint.y){
		return {x: previousPivotPoint.x, y: (previousPivotPoint.y - 1)};
	}
	//else
	return {x: (previousPivotPoint.x - 1), y: previousPivotPoint.y};
}

function isPalindromic(num){
	var str = num.toString(), i, len = str.length;
	
	for(i=0; i<(len/2.0); i++){
		if(str.charAt(i) !== str.charAt(len - i - 1)){
			return false;
		}
	}
	return true;
}


(function(getResult){
	var startTime = new Date(),
	problemNumber = 4,
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