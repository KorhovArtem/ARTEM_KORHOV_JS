	var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
	var maxCount = 0; 
	var sequence = 0; 
	var curr = 0; 
	var i; 

	for(i = 0; i < arr.length; i++){ 
		if (i != 0) { 
			if (arr[i] == arr[i - 1]){ 
				curr++; 
		} 
		else { 
				curr = 1; 
		} 
	} 
	if ( curr > maxCount){ 
		//console.log(arr[i]+"|"+curr); 
		maxCount = curr; 
		sequence = i + 1 - maxCount; 
	} 
} 
	for (i = sequence; i < sequence + maxCount; i++) { 
		console.log(arr[i]); 
}