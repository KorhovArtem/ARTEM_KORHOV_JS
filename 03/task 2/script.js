var n = 5;
var a = [
[-1,-2,3,4,5],
[7,2,6,-2,3],
[-3,4,-8,3,5],
[2,3,4,3,5],
[5,4,3,8,-9]
]


for (var i = 0; i < n; i++){
	for ( var j = 0; j < n; j++){
		if ( i == j && a[i][j] < 0){
			a[i][j] = 0;
		}
		if (i == j && a[i][j] > 0){
			a[i][j] = 1;
		}
		document.write(a[i][j] + "&nbsp&nbsp" );
	}
		document.write("<br>")
}




