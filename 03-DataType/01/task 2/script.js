var arr1 = ['q','w','e'];
var arr2 = ['q','w'];
var areArraysEqual = true; 
    if (arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                areArraysEqual = false;
                break;
            }
        }
    }   else {

        areArraysEqual = false;
        }
    document.write("Is array " + arr1 + " compare lexicographically by array " + arr2 + " result is:" +areArraysEqual+ ".<br>")
            
           
