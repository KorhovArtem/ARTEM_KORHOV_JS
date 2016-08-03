function checkBrackets(str){
    var depth = 0;
    var i;
    for(i in str){   
        if(str[i] == '('){
            depth ++;
        } else if(str[i] == ')') {
            depth --;
        }  
        if (depth < 0) {
        	return false;
        }
    }
    if(depth > 0) {
    	return false;
    }
  	return true;
 }
	console.log(checkBrackets(' ((a+b)/5–d) '));
	console.log(checkBrackets(' ) (a+b)) ')); 
	
