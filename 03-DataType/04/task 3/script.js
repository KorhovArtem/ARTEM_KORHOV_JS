 	function countOcurrences(text, flags) {
        var match = text.match(new RegExp(flags, 'gi'))
        return match && match.length || 0
    }
    console.log(countOcurrences('We are living in an yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.', 'in'))

   
