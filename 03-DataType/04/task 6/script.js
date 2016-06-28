	var text = '<div>text<div>more text</div>and more...</div>in body';
	var output = text.replace(/<(.*?)>/g, '');
	console.log(output);
	