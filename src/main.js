let days = [
	require('./days/one'),
	require('./days/one-extra'),
	require('./days/two')
];

days.forEach(function(day, key) {
	new day();
});