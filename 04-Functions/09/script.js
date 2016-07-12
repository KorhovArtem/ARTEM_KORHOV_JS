function toConsole(a) {
	console.log(a);
}

function toAlert(a){
	alert(a);
}

function splitToWords(msg, callback) {
	if (callback !== undefined)	{
		var a = msg.split(' ');
		var i;
		for (i = 0; i < a.length; i++) {
			callback(a[i]);
		}
	} else{
		return msg.split(' ');
	}
}

splitToWords('My very long text msg', toConsole);
splitToWords('My very long text msg', toAlert);
console.log(splitToWords('My very long text msg'))