let days = [
	require('./days/one'),
	require('./days/one-extra')
];

days.forEach(function(day, key) {
	new day();
});