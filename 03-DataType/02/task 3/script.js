		var text = 'Olya has a pencil, Olya has a pen, She draws with a pencil, She writes with a pen.';
        var firstWord = 'Olya';
        var secondWord = 'She';
        function findWord(text, word, isCaseSensitive) {
            if (!isCaseSensitive) {
                text = text.toLowerCase();
                word = word.toLowerCase();
            }
            var startIndex = 0;
            var occurences = 0;
            while (true) {
                startIndex = text.indexOf(word, startIndex);
                if (startIndex == -1) {
                    break;
                }
                else {
                    startIndex += word.length;
                    occurences++;
                }
            }
            return occurences;
        }

        console.log(firstWord + ' ' + findWord(text, firstWord, true));
        console.log(secondWord + ' ' + findWord(text, secondWord, false));