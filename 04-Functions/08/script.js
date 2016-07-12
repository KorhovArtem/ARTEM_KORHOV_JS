function str(a) {
	if (arguments.length == 0){
		alert('String is empty');
	}
	else if (arguments.length > 0){
		alert(' String is non empty');
	}
}
	
str.isNonEmptyStr = function(pr){
	if (pr !== '' && typeof pr !== 'undefined' && typeof pr !=='number') { 
		return(true); 
	} else { 
		return(false); 
		} 
}

console.log(str.isNonEmptyStr("a"));