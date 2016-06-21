var i, j , n = 9;
var center = n / 2;
for (var  i = 0; i < n ; i++){
	for (var j = 0; j < n; j++) {
		if (i <= center) {
			if (j >= center-i && j <=center+i){
				document.write("*");
			}
			else { 
				document.write("&nbsp&nbsp");
		}
		}
	}
		document.write("<br>");
}


