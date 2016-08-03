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
        function searchPerson(arr) {
            var currAge = 0;
            var minAge = arr[0].age;
            var youngPerson = arr[0];
            var person;
            for (person in arr) {
                currAge = arr[person].age;
                if (currAge < minAge) {
                    minAge = currAge;
                    youngPerson = arr[person];
                }
            }
            return youngPerson;
        }
		var gosho = createPerson('Gosho', 'Petrov', 32);
		var bay = createPerson('Bay', 'Ivan', 81);
		var jobs = createPerson('Steven ', 'Paul', 44);
		var arr = [gosho, bay, jobs];
		console.log('Younge person - ' + searchPerson(arr));