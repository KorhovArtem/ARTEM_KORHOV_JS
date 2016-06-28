	function parseUrl(url) {
			var count = /(.*):\/\/(.*?)(\/.*)/.exec(url);
			return {protocol: count[1], server: count[2], resource: count[3] };
		}
	var url = 'http://www.tut.by/forum/index.php';
	var result = parseUrl(url);
	var i;
	for (i in result) {
			console.log(i+ ': '+ result[i]);
		}	