	var arr = [3, 2, 3, 4, 2, 2, 4];
    var curr = 1;
    var long = 1;
    var index;
    var i;

    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            curr++;
        } else {
            if (long < curr) {
                long = curr;
                index = i - curr + 1;
            }
            curr = 1;
        }
    }
    
    var result = arr.slice(index, index + long);
    console.log(result);