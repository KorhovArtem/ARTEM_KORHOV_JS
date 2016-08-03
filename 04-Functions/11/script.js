var Employee = {
	name: 'Anne',
	work: function () {
			console.log('I am ' + this.name + '. I am working...');
	}
}

Employee.work();