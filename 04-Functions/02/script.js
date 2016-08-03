var c = 1;
var f = -1;
var result = function comp(a , b) {
	if ( a ==  b) {
		console.log('A = '+ a + '\nB = ' + b + '\nresult = ' + c);
	}
	else if (a != b ) {
		console.log('A = '+ a + '\nB = ' + b + '\nresult = ' + f);
	}
}

result ( 'abc', 'abc');
result('qqq', 'www');