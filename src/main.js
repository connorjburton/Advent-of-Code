let days = [
	require('./days/one')
];

days.forEach(function(day, key) {
	console.log('--------------------DAY ' + (key + 1) + '--------------------');
	new day();
});