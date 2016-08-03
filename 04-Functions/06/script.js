var param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.";
var param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.";

function massSubString() {
	 a= [];
	 var i;
	 for ( i = 0; i <= arguments.length - 1; i++ ) {
    	a[i] =  arguments[i].substring(arguments[i].indexOf(':') + 1, arguments[i].length - 1).trim().split(', ').join(', ');
		}
	
  return a;

}

console.log(massSubString(param1,param2));
