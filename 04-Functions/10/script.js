function cypyright() {
	var count = '\u00A9';

	return function(a){
		return (count + ' ' + a);
	}
}
cypyright();
console.log(cypyright()("EPAM"));