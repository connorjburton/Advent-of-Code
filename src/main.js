let days = [
	require('./days/one'),
	require('./days/one-extra'),
	require('./days/two'),
	require('./days/two-extra'),
	require('./days/three')
];

days.forEach(function(day, key) {
	new day();
});