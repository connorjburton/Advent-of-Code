let retriveLocalFile = function retriveLocalFile(path, callback, thisArg) {
	let request = new XMLHttpRequest();

	request.addEventListener('error', function() { console.error('retriveLocalFile failed.'); });

	request.addEventListener('load', function() {
		if(request.status === 404 || request.status === 500) {
			console.error('retriveLocalFile couldn\'t find the requested file.');
		} else {
			if(callback) {
				var cb = (thisArg) ? callback.bind(thisArg) : callback;
				cb(request.response);
			}
		}
	});

	request.open('GET', path);
	request.send(null);
}

module.exports = retriveLocalFile;