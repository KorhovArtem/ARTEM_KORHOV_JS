Array.prototype.remove = function (number) {
            if (parseInt(number) === parseFloat(number) && number < Number.MAX_VALUE && number > Number.MIN_VALUE) {
                while (true) {
                    var index = array.indexOf(number, index);
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                    else {
                        break;
                    }
                }
            }
        }
        var array = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
        array.remove(1);
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }