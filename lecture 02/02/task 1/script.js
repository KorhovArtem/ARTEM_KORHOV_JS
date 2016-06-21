var A = -4, B = 5, sum = 0;

for (var i = A; i <= B; i++) {
	sum += i;
}
document.write("Сумма на промежутке от А до B = " + sum + "</br> </br>");


if (0 == A % 2) {
	++A;
}
for (var i = A; i <= B; i += 2) {
	document.write("Нечетное число - " + i + '<br/>');
 }