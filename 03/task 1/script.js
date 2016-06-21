var a = [8, -1 , 10, 122, -12, 20, 1, 3, 11, 17], max, min;

  function getMax(a) {
    var aLen = a.length,
        max = a[0];
    for (var i = 0; i < aLen; i++) {
      if (max < a[i]) {
        max = a[i];
      }
    }
    return max;
  }

  function getMin(a) {
    var aLen = a.length,
        min = a[0];
    for (var i = 0; i < aLen; i++) {
      if (min > a[i]) {
        min = a[i];
      }
    }
    return min;
  }

  function sum(a){
  	var aLen = a.length;
  	sum = 0;
  	for (var i = 0; i < aLen; i++) {
  		sum += a[i];
  		}
  		return sum;
  }

  function arith(a){
  	var aLen = a.length;
  		result = 0;
  	for (var i = 0; i < aLen; i++) {
  		result += a[i];
  	}
  	var divis = result / aLen;
  	return divis;
  }

  function odd() {
  	var aLen = a.length;
  	for (var i = 0; i < aLen; i++) {
  		if (a[i]%2 == 1)
  			document.write("Нечетные элемент массива = " + a[i] + "<br>");
  		
  	}

  }
  	odd();
  	max = getMax(a);
    min = getMin(a);
    arith = arith(a);
  	sum = sum(a);
  	document.write("<br> Максимальный элемент = " + max + "<br>");
  	document.write("Минимальный элемент =  " + min + "<br>");
  	document.write("Сумма элементов =  " + sum + "<br>");
  	document.write("Средние арифметическое = " + arith + "<br>");

  
