let retriveLocalFile = require('../helpers/retrive-local-file');

class DayThree {
	constructor(options) {
		this.calc = {
			'^': function(a, b) { return a + b; },
			'>': function(a, b) { return a + b; },
			'v': function(a, b) { return a - b; },
			'<': function(a, b) { return a - b; }
		}

		retriveLocalFile('.DELIVERINGPRESENTS', function(response) {
			this.commands = this.parseCommands(response);
			this.run();
		}, this);
	}

	run() {
		let total = 1;
		let history = ['^0|>0'];
		let houses = {'^0|>0': true};

		this.commands.forEach(function(command) {
			let orig = command;

			if(command === '<') {
				command = '>';
			} else if(command === 'v') {
				command = '^';
			}

			let lastSplit = history[history.length - 1].split('|');

			lastSplit = lastSplit.map(function(val) {
				if(val.split('')[0] === command) {
					return command + (this.calc[orig](parseInt(val.replace(command, '')), 1));
				} else {
					return val;
				}
			}, this);

			let finalString = lastSplit.join('|');
			if(!houses[finalString]) {
				total++;
				houses[finalString] = true;
			}

			history.push(finalString);
		}, this);

		console.log('Day 3: ' + total);
	}

	parseCommands(config) {
		return config.split('');
	}
}

module.exports = DayThree;

/**
 * Santa is delivering presents to an infinite two-dimensional grid of houses.
 * He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.
 * However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?
 * For example:
 * > delivers presents to 2 houses: one at the starting location, and one to the east.
 * ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
 * ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.
 */