function reverse(number){
        var digits = [];
        while (number > 0) {
            var lastDigit = number % 10;
            number = parseInt(number / 10);
            digits.push(lastDigit);
        }

        var finalNumber = 0;
        for (var i = 0; i < digits.length; i++) {
                finalNumber = finalNumber * 10 + digits[i];
        }
        return finalNumber;
} console.log(reverse(1234));
