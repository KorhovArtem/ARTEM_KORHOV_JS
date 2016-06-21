var x = prompt ("Введите число: ");
var result = 1;
do {
	result *= x;
	x -= 1;
} while (x > 0 )
alert(result);