	function createPerson(firstName, lastName, age) {
            return {
                firstName: firstName,
                lastName: lastName,
                age: age,
                toString: function () {
                    return 'Name: ' + this.firstName + '\nlastName: ' + this.lastName + '\nAge: ' + this.age;
                }
            }
        }
      function group(arr, prop) {
	        var result = new Object();
            var person;
            for (person in arr) {
                if (result[arr[person][prop]] == undefined || result[arr[person][prop]] == null) {
                    result[arr[person][prop]] = [];
                }
                result[arr[person][prop]].push(arr[person]);
            }
            return result;
        }

		var gosho = createPerson('Gosho', 'Petrov', 32);
		var bay = createPerson('Bay', 'Ivan', 81);
		var jobs = createPerson('Steven ', 'Paul', 44);
		var yana = createPerson('Yana ', 'Aleksandrovna', 21);
		var arr = [gosho, bay, jobs, yana];
		var groupFirstName = group(arr, 'firstName');
		var groupLastName = group(arr, 'lastName');
		var groupAge = group(arr, 'age');
		console.log('Group first name : ');
		console.log(groupFirstName);
		console.log('\nGroup last name : ');
		console.log(groupLastName);
		console.log('Group age : ');
		console.log(groupAge);
