var n = 10;
for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if (i == 0 || j == 0 || i == n - 1 || j == n - 1){
			document.write("*");
		}
		else {
			document.write("&nbsp&nbsp");
		}
	}
	document.write("<br>");
}